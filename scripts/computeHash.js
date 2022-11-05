const ethers = require('ethers');
const MESSAGE = "Code is Law";
const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(MESSAGE));
console.log(hash)
