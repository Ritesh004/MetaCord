const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappcord", function () {
  let deployer, user
  let dappcord
    const NAME = "Dappcord"
    const SYMBOL = "DC"

    this.beforeEach(async () => {
 
      // setup accounts...
      [deployer, user] = await ethers.getSigners()

      // Deploy contract...
        const Dappcord = await ethers.getContractFactory("Dappcord")
        dappcord = await Dappcord.deploy(NAME, SYMBOL)
        
        //Createing Channel...
        const transaction = await dappcord.connect(deployer).createChannel("general", tokens(1)) 
      await transaction.wait()

    })
    
    describe("Deployment", function(){
      it("Sets the name", async () => {
        // Fetch name
        let result = await dappcord.name()
        // check name
        expect(result).to.equal(NAME)
      })

       it("Sets the symbol", async () => {
        // Fetch symbol
        let result = await dappcord.symbol()
        // check symbol
        expect(result).to.equal(SYMBOL)
       })

       it("Sets the owner", async () => {
        const result = await dappcord.owner()
        expect(result).to.equal(deployer.address)
       })

    })


  describe("Creating Channel", () => {
    it('Returns total channels', async ()=> {
      const result = await dappcord.totalChannels()
      expect(result).to.be.equal(1)
    })

    it('Returns channels attributes', async ()=> {
      const channel = await dappcord.getChannel(1)
      expect(channel.id).to.be.equal(1)
      expect(channel.name).to.be.equal("general")
      expect(channel.cost).to.be.equal(tokens(1))
    })

  })
   
})
