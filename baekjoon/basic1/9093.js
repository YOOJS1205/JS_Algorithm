let fs = require('fs');
let input = fs.readFileSync('../example.txt').toString().split('\n');

function solution(input) {
  let answer = [];
  let inputAry = input.map((item) => {
    if (!Number(item)) {
      return item.split(' ');
    }
  });
  for (const x of inputAry) {
    if (x) {
      const reverse = x.map((item) => item.split('').reverse().join(''));
      answer.push(reverse.join(' '));
    }
  }
  console.log(answer.join('\n'));
}

solution(input);
