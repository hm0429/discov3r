async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  const initialSupply = ethers.utils.parseEther('10000');
  const erc20Token = await ERC20Token.deploy(initialSupply);
  console.log("erc20Token address:", erc20Token.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});