const { expect } = require('chai');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
};

describe('Dappazon', () => {
  let deployer, buyer;

  beforeEach(async () => {
    // Setup accounts
    [deployer, buyer] = await ethers.getSigners();
    console.log(deployer.address, buyer.address);
    // Deploy smart contract
    const Dappazon = await ethers.getContractFactory('Dappazon');
    dappazon = await Dappazon.deploy();
  });

  describe('Deployment', () => {
    it('Sets the owner', async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });
  });

  describe('Listing', () => {
    it('Returns item attributes', async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });
  });
});
