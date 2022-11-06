const crypto = require("crypto")
const challenge = crypto.randomBytes(32).toString("hex")
console.log(challenge)