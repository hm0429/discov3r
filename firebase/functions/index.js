const functions = require('firebase-functions');
const axios = require('axios');
const aesCmac = require('node-aes-cmac').aesCmac;

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
