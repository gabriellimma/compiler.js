const compiler = require('./compiler.js');
const input = '(add 2 (sub 4 3))';
const output = compiler(input);
console.log(JSON.stringify(output, null, 2));