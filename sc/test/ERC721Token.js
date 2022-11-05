const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("ERC721Token contract", function () {
	async function deployContractFixture() {
		const contractFactory = await ethers.getContractFactory("ERC721Token");
		const [owner, addr1, addr2] = await ethers.getSigners();
		const contract = await contractFactory.deploy();
		await contract.deployed();
		return { contractFactory, contract, owner, addr1, addr2 };
	}

	describe("Mint", function () {
		it("Should totalSupply is 1 after minting", async function () {
			const { contract, owner } = await loadFixture(deployContractFixture);
			await contract.mint("piyo")
			expect(await contract.totalSupply()).to.equal(1);
		})

	})
});