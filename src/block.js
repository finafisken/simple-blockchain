const SHA256 = require("sha256");

class Block {
  constructor(timestamp, payload, previousHash = "") {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.payload = payload;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.timestamp +
      this.nonce +
      JSON.stringify(this.payload) +
      this.previousHash
    );
  }

  /*
  * As a proof of work we require the hash of the to block to start with 
  * (difficulty) amount of zeros before we allow it to be added to the chain.
  * The nonce value will ensure that the hash produces a different result each
  * attempted guess.
  */
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: ", this.hash);
  }
}

module.exports = Block;
