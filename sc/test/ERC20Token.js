const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("ERC20Token contract", function () {
	async function deployContractFixture() {
		const contractFactory = await ethers.getContractFactory("ERC20Token");
		const [owner, addr1, addr2] = await ethers.getSigners();
		const initialSupply = ethers.utils.parseEther('10000');
		const contract = await contractFactory.deploy(initialSupply);
		await contract.deployed();
		return { contractFactory, contract, owner, addr1, addr2 };
	}

	describe("Deployment", function () {
		it("Should totalSupply is 10000", async function () {
			const { contract, owner } = await loadFixture(deployContractFixture);
			expect(await contract.totalSupply()).to.equal(ethers.utils.parseEther('10000'));
		});
	});
});