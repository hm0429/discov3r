const ethers = require('ethers');
const wallet = new ethers.Wallet.createRandom();

const address = wallet.address;
console.log('address:', address);

const mnemonic = wallet.mnemonic.phrase;
console.log('mnemonic:', mnemonic);

const privateKey = wallet.privateKey;
console.log('privateKey:', privateKey);

