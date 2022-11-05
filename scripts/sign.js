const ethers = require('ethers');
require('dotenv').config();

(async ()=> {

    const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY);

    const address = "0x4B507d47B0D90f21720EA88DeB9219b25C1Fed2f";

    const message = ethers.utils.solidityKeccak256(
        ["address"], 
        [address]
    );

    const signature = await signer.signMessage(ethers.utils.arrayify(message));
    console.log(signature)

    const recoveredAddress = ethers.utils.verifyMessage(ethers.utils.arrayify(message), signature);
    console.log(recoveredAddress)

})();


