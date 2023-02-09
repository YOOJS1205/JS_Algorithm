// 스택 수열

let fs = require('fs');
let inputAry = fs.readFileSync('../example.txt').toString().split('\n');
inputAry.shift();

console.log(inputAry);
