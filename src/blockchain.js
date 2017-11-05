const Block = require("./block.js");

class Blockchain {
  constructor(difficulty, genesisBlock) {
    const gBlock = genesisBlock || new Block(Date.now(), { genesis: "block" });
    this.chain = [gBlock];
    this.difficulty = difficulty;
  }

  addBlock(block) {
    const latestBlock = this.chain[this.chain.length - 1];
    block.previousHash = latestBlock.hash;
    block.mineBlock(this.difficulty);
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const block = this.chain[i];
      const prev = this.chain[i - 1];
      if (block.hash !== block.calculateHash()) {
        return false;
      }
      if (block.previousHash !== prev.hash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
