// 팩토리얼

let fs = require('fs');
let num = +fs.readFileSync('../../example.txt').toString().trim();

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function solution(num) {
  console.log(factorial(num));
}

solution(num);
