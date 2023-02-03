// 백준에서는 trim이 문제였다...! 좌우 공백 케이스 생각해야하는듯

let fs = require('fs');
let inputAry = fs
  .readFileSync('../example.txt')
  .toString()
  .split('\n')
  .map((item) => item.split(''));
inputAry.shift();

function solution(ary) {
  for (const x of ary) {
    let result = 'YES';
    let stack = [];
    for (const y of x) {
      if (y === '(') {
        stack.push('(');
      } else if (y === ')') {
        stack.length ? stack.pop() : (result = 'NO');
      }
    }
    if (stack.length) {
      result = 'NO';
    }
    console.log(result);
  }
}

solution(inputAry);
