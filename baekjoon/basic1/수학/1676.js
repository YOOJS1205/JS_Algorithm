// 팩토리얼 0의 개수
// 팩토리얼의 결과값이 너무 커질 우려가 있다.
// 따라서 BigInt로 예외처리하는 것이 필요하다!

let fs = require('fs');
let num = +fs.readFileSync('../../example.txt').toString().trim();

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1n;
  }
  return BigInt(num) * factorial(num - 1);
}

function solution(num) {
  let reverseAry = factorial(num).toString().split('').reverse();
  let answer = 0;
  for (const x of reverseAry) {
    if (x === '0') {
      answer++;
    } else {
      return answer;
    }
  }
}

console.log(solution(num));
