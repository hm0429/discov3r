const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Discov3r contract", function () {

	async function deployContractFixture() {
		// Discov3r contract
		const contractFactory = await ethers.getContractFactory("Discov3r");
		const [owner, addr1, addr2] = await ethers.getSigners();
		const contract = await contractFactory.deploy();
		await contract.deployed();

		// TreasureBox contract
		const tbContractFactory = await ethers.getContractFactory("TreasureBox");
		const tb = await tbContractFactory.deploy(contract.address);

		await contract.setTreasureBoxContract(tb.address)

		return { contractFactory, contract, tbContractFactory, tb, owner, addr1, addr2 };
	}

	describe("Create default treasure", function () {
		it("Should totalSupply of TreasureBox is 1 after minting", async function () {
			const { contract, tb, owner } = await loadFixture(deployContractFixture);
			const keyHash = "0x86722f587699196c5a0923b80c7d60ed575b7a736e3214a638a9399f5082d8a2";
			await contract.createDefaultTreasure(
				"test", "37.8029308", "-122.4484231", keyHash);
			expect(await tb.totalSupply()).to.equal(1);
		})

	})
});