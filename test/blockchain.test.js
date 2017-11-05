const Block = require('../src/block.js');
const Blockchain = require('../src/blockchain.js');
const assert = require('assert');

const testBlockchain = new Blockchain(2);

describe('Blockchain', function(){
  it('adds block with correct reference to previous', function(){
    testBlockchain.addBlock(new Block('1', 'first added block'));
    assert.equal(testBlockchain.chain.length, 2);
    assert.equal(testBlockchain.chain[0].hash, testBlockchain.chain[1].previousHash);
  });
  it('adds two more blocks and chain is still valid', function(){
    testBlockchain.addBlock(new Block('2', 'second added block'));
    testBlockchain.addBlock(new Block('123', 'third added block'));
    assert.equal(testBlockchain.chain.length, 4);
    assert(testBlockchain.isValid());
  });
  it('is not valid if existing blocks are manipulated', function(){
    assert(testBlockchain.isValid());
    testBlockchain.chain[2].payload = 'i have changed';
    testBlockchain.chain[2].calculateHash();
    assert(!testBlockchain.isValid());
  });
});