let fs = require('fs');
let input = fs.readFileSync('../../example.txt').toString().trim().split('\n');
input.shift();

let numAry = input.map((item) => +item);

function solution(ary) {
  let answer = [];
  let dy = Array.from({ length: 12 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  dy[3] = 4;
  for (let i = 4; i <= 12; i++) {
    dy[i] = dy[i - 1] + dy[i - 2] + dy[i - 3];
  }
  for (const x of numAry) {
    answer.push(dy[x]);
  }
  return answer.join('\n');
}

console.log(solution(numAry));
