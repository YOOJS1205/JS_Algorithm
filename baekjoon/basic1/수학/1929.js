let fs = require('fs');
let input = fs.readFileSync('../../example.txt').toString().trim().split(' ');

let firstNum = +input[0];
let secondNum = +input[1];

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(small, large) {
  let answer = [];
  for (let i = small; i <= large; i++) {
    isPrime(i) && answer.push(i);
  }
  console.log(answer.join('\n'));
}

solution(firstNum, secondNum);
