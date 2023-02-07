let fs = require('fs');
let input = fs.readFileSync('../../example.txt').toString().split(' ');

let firstNum = +input[0];
let secondNum = +input[1];

function findFive(num) {
  let answer = 0;
  while (num >= 5) {
    answer += parseInt(num / 5);
    num = parseInt(num / 5);
  }
  return answer;
}

function findTwo(num) {
  let answer = 0;
  while (num >= 2) {
    answer += parseInt(num / 2);
    num = parseInt(num / 2);
  }
  return answer;
}

function solution(firstNum, secondNum) {
  return Math.min(
    findFive(firstNum) - findFive(secondNum) - findFive(firstNum - secondNum),
    findTwo(firstNum) - findTwo(secondNum) - findTwo(firstNum - secondNum),
  );
}

console.log(solution(firstNum, secondNum));
