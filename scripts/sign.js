const ethers = require('ethers');
require('dotenv').config();

(async ()=> {

    const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY);

    const address = "0xa24CBE6d7a590E61e0271621f7A998308E469136";

    const message = ethers.utils.solidityKeccak256(
        ["address"], 
        [address]
    );

    const signature = await signer.signMessage(ethers.utils.arrayify(message));
    console.log(signature)

    const recoveredAddress = ethers.utils.verifyMessage(ethers.utils.arrayify(message), signature);
    console.log(recoveredAddress)

})();


