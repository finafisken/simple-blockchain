const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

const myBlockchain = new Blockchain();

myBlockchain.addBlock(new Block(Date.now() , { data: 'payload2' }));
myBlockchain.addBlock(new Block(Date.now() , { top: 'secret' }));

console.log(JSON.stringify(myBlockchain, null, 2));
console.log('isValid: ', myBlockchain.isValid());
