const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const axios = require('axios');
const aesCmac = require('node-aes-cmac').aesCmac;
const crypto = require('crypto');
const ethers = require('ethers');


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

exports.unlock = functions.https.onRequest(async (req, res) => {
	if (req.get('x-api-key') !== process.env.API_KEY) {
		return res.status(400).send("auth error");
	}

	if(!req.body.uuid) {
		return res.status(400).send("invalid data");
	}

	let signature = generateRandomTag(process.env.SESAME_KEY_SECRET);
	await executeSmartLockCommand(req.body.uuid, 83, "discov3r", signature);

	return res.status(200).send("ok");
})

async function getChallenge(address) {
	const ref = db.collection('accounts').doc(address);
	const account = await ref.get();
	if (!account.exists || !account.data().challenge) {
		const challenge = await updateChallenge(address);
		return challenge;
	}
	return account.data().challenge;
}

async function updateChallenge(address) {
	const ref = db.collection('accounts').doc(address);
	const challenge = crypto.randomBytes(32).toString("hex");
	await ref.set({
		challenge: challenge
	}, {merge: true});
	return challenge;
}

exports.challenge = functions.https.onRequest(async (req, res) => {
	const address = req.query.address;
	if(!address || !ethers.utils.isAddress(address)) {
		return res.status(400).send("invalid data");
	}
	const challenge = await getChallenge(address);
	return res.json({challenge: challenge});
})


