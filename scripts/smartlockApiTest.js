const axios = require('axios');
require('dotenv').config();

(async () => {
    const res = await axios({
    	method: 'post',
    	url: 'https://us-central1-discov3r.cloudfunctions.net/unlock',
    	headers: {"x-api-key": process.env.SMARTLOCK_API_KEY},
    	data: {
        	uuid: process.env.SMARTLOCK_UUID
    	}
	})
	console.log(res);
})().catch((e)=>console.error(e))