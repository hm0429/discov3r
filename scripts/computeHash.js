const ethers = require('ethers');
const MESSAGE = "piyo";
const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(MESSAGE));
console.log(hash)
