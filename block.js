const SHA256 = require('sha256');

class Block {
  constructor(timestamp, payload, previousHash = ''){
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.payload = payload;
    this.hash = this.calculateHash();
  };

  calculateHash(){
    return SHA256(this.timestamp + JSON.stringify(this.payload) + this.previousHash);
  }
};

module.exports = Block;