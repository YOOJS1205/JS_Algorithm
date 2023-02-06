let fs = require('fs');
let input = fs.readFileSync('../../example.txt').toString().split(' ');

const firstNum = input[0];
const secondNum = input[1];

console.log(firstNum, secondNum);

function solution(first, second) {
  let num = first >= second ? parseInt(first / 2) : parseInt(second / 2);
}

solution(firstNum, secondNum);
