let fs = require('fs');
let inputNum = +fs.readFileSync('../../example.txt').toString().trim();

function solution(num, divisionNum) {
  if (num === 1) {
    return divisionNum;
  }
  if (num % 3 === 0) {
    divisionNum = Math.min(solution(num / 3, divisionNum + 1), solution(num - 1, divisionNum + 1));
  } else if (num % 2 === 0) {
    divisionNum = Math.min(solution(num / 2, divisionNum + 1), solution(num - 1, divisionNum + 1));
  } else {
    divisionNum = solution(num - 1, divisionNum + 1);
  }
  return divisionNum;
}

console.log(solution(inputNum, 0));
