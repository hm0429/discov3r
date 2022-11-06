const axios = require('axios');

(async () => {

	const worldIdProof = {
    "merkle_root": "0x20d9ffa3098537d4a3fa3ebfd954bc1a489733f941cba387c70b4caecfa8ee00",
    "nullifier_hash": "0x07fc9573659d4a81e6f20a7bbccbb2a88398a404e5c4ef9a7104ccf349170621",
    "proof": "0x0d55087c25999d2534be9ca909f0efdc27cedb26cda1568ea2889f6a93f23db31836046ebe7f35464e6d4efded63bb30e145fa5e5e9b4a7466da35b1e0afcf4b181b6260eca51e72055e549ee0b25d0667c2f0bb347cadefb9ba50313b8c4d19285166d3df6ce3c3f747cfab158fd4eedf838fa60b761ce557c43c4035ec0e28287cdf77f2d37eed5284a9e7550977cd1def9d838fc1d4ddc1c8c72b5cc627c81fd7129a94614eff5555e7b22b5330ab454e526b469e1546dd89ab6fbd7c3ac6165569a99e1897f4575ae45af6b01020b6bddc507848ed4239cede18bfe62b191069a733b8beec3eeaa0b7dab0faef4d53218ed5afe70fbd0041a1e18f56552b"
	}

	const signal = 'testtest2'

	const data = {
    	action_id: 'wid_staging_0fa2dbde7735834e560fb5ad13146f0c',
    	signal: signal,
		merkle_root: worldIdProof.merkle_root,
		nullifier_hash: worldIdProof.nullifier_hash,
		proof: worldIdProof.proof
	};
	const result = await axios({
		method: 'post',
		url: 'https://developer.worldcoin.org/api/v1/verify',
		data: data
	});
	console.log(result);
})()

