const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const axios = require('axios');
const aesCmac = require('node-aes-cmac').aesCmac;
const crypto = require('crypto');
const ethers = require('ethers');
const cors = require('cors')({origin: true})
// const { Blob } = require('buffer');
// const { NFTStorage, File } = require('nft.storage');
// const { base64ToBlob } = require('base64-blob');

function generateRandomTag(secret) {
    let key = Buffer.from(secret, 'hex');
    const date = Math.floor(Date.now() / 1000);
    const dateDate = Buffer.allocUnsafe(4);
    dateDate.writeUInt32LE(date);
    const message = Buffer.from(dateDate.slice(1, 4));
    return aesCmac(key, message);
}

async function executeSmartLockCommand(uuid, cmd, history, signature) {
    let base64_history = Buffer.from(history).toString('base64');
    await axios({
    	method: 'post',
    	url: `https://app.candyhouse.co/api/sesame2/${uuid}/cmd`,
    	headers: {"x-api-key": process.env.SESAME_API_KEY},
    	data: {
        	cmd: cmd,
        	history: base64_history,
        	sign: signature
    	}
	});
}

exports.unlock = functions.https.onRequest((req, res) => {
	cors(req, res, async () => {
		if (req.get('x-api-key') !== process.env.API_KEY) {
			return res.status(400).send("auth error");
		}

		if(!req.body.uuid) {
			return res.status(400).send("invalid data");
		}

		let signature = generateRandomTag(process.env.SESAME_KEY_SECRET);
		await executeSmartLockCommand(req.body.uuid, 83, "discov3r", signature);

		return res.status(200).send("ok");
	});
})

async function getChallenge(address) {
	const ref = db.collection('accounts').doc(ethers.utils.getAddress(address));
	const account = await ref.get();
	if (!account.exists || !account.data().challenge) {
		const challenge = await updateChallenge(address);
		return challenge;
	}
	return account.data().challenge;
}

async function updateChallenge(address) {
	const ref = db.collection('accounts').doc(ethers.utils.getAddress(address));
	const challenge = crypto.randomBytes(32).toString("hex");
	await ref.set({
		challenge: challenge
	}, {merge: true});
	return challenge;
}

exports.challenge = functions.https.onRequest((req, res) => {
	cors(req, res, async () => {
		const address = req.query.address;
		if(!address || !ethers.utils.isAddress(address)) {
			return res.status(400).send("invalid data");
		}
		const challenge = await getChallenge(address);
		return res.json({challenge: challenge});
	});
})

async function sign(address) {
    const message = ethers.utils.solidityKeccak256(
        ["address"], 
        [ethers.utils.getAddress(address)]
    );
    const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY);
    const signature = await signer.signMessage(ethers.utils.arrayify(message));
    return signature
}

async function verifyWorldId(data) {
    return await axios({
    	method: 'post',
    	url: 'https://developer.worldcoin.org/api/v1/verify',
    	data: data
	});
}

exports.signature = functions.https.onRequest((req, res) => {
	cors(req, res, async () => {
		const address = req.body.address;
		const signature = req.body.signature;
		const worldIdProof = req.body.worldIdProof;

		if(!address || !ethers.utils.isAddress(address) || !signature) {
			return res.status(400).send("invalid data");
		}

		const challenge = await getChallenge(address);
		const message = ethers.utils.solidityKeccak256(
	        ["string"], 
	        [challenge]
	    );
	    const recoveredAddress = ethers.utils.verifyMessage(ethers.utils.arrayify(message), signature);
	    if (ethers.utils.getAddress(address) !== ethers.utils.getAddress(recoveredAddress)) {
	    	return res.status(400).send("invalid signature");
	    }
	    await updateChallenge(address);

	    const data = {
	    	action_id: "wid_staging_0fa2dbde7735834e560fb5ad13146f0c",
	    	signal: address,
	    	merkle_root: worldIdProof.merkle_root,
	    	proof: worldIdProof.proof,
	    	nullifier_hash: worldIdProof.nullifier_hash
	    };
	    const verificationResult = await verifyWorldId(data);
	    console.log(verificationResult);
	    if (!verificationResult.data.success) {
	    	return res.status(400).send("failed to verify");
	    }

	    const serverSignature = await sign(address);
	    return res.json({signature: serverSignature});
	});
})

// async function storeNFT(base64Image, name, description) {
//     const image = await base64ToBlob(base64Image)
//     const nftstorage = new NFTStorage({ token: process.env.NFT_STORAGE_KEY });
//     return nftstorage.store({
//         image,
//         name,
//         description,
//     });
// }

// exports.store = functions.https.onRequest((req, res) => {
// 	cors(req, res, async () => {
// 		const name = req.body.name;
// 		const description = "Discov3r Treasure Box";
// 		const base64Image = req.body.base64Image;
// 		const result = await storeNFT(base64Image, name, description);
// 		return res.json(result)
// 	})
// })

