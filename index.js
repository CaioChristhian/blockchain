const BlockChain = require("./Blockchain")

const blockChain = new BlockChain();
blockChain.addBlock({ from: 'a', to: 'b', amount: 1 });
blockChain.addBlock({ from: 'a', to: 'c', amount: 2 });

console.log(JSON.stringify(blockChain));
console.log(blockChain.isValid());
blockChain.blocks[1].data = { from: 'a', to: 'b', amount: 2 };
console.log(JSON.stringify(blockChain));
console.log(blockChain.isValid());