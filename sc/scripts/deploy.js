async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy Discov3r contract
  const contractFactory = await ethers.getContractFactory("Discov3r");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log(`Discov3r address: ${contract.address}`);

  // Deploy TreasureBox contract
  const tbContractFactory = await ethers.getContractFactory("TreasureBox");
  const tb = await tbContractFactory.deploy(contract.address);
  await tb.deployed();
  console.log(`TreasureBox address: ${tb.address}`);

  // Set address
  await contract.setTreasureBoxContract(tb.address)

  // Create an account
  const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY);   
  const message = ethers.utils.solidityKeccak256(
      ["address"], 
      [deployer.address]
  );
  const signature = await signer.signMessage(ethers.utils.arrayify(message));
  await contract.createAccount(signature);
}

main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});