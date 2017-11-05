const Block = require('../src/block.js');
const SHA256 = require('sha256');
const assert = require('assert');

const ts = '123';
const payload = 'testPayload';
const prevHash = 'prevHashSign';
const nonce = 0;
const testBlock = new Block(ts, payload, prevHash);
const difficulty = 2;

const mockHash = () => SHA256(ts + nonce + JSON.stringify(payload) + prevHash);

describe('Block', function(){
  it('gets a hash based on correct input', function(){
    assert.equal(testBlock.hash, mockHash());
  });
  it('respects mining difficulty and produces correct hash', function(){
    testBlock.mineBlock(difficulty);
    assert.equal(testBlock.hash.substring(0, difficulty), Array(difficulty + 1).join('0'));
  });
});