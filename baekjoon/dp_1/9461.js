// 수가 오름차순으로 입력된다는 보장이 없음

let fs = require('fs');
let inputAry = fs.readFileSync('../example.txt').toString().trim().split('\n');
inputAry.shift();

let numAry = inputAry.map((item) => +item);

function solution(ary) {
  let answer = [];
  let dy = Array.from({ length: Math.max(...ary) + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 1;
  dy[3] = 1;
  dy[4] = 2;
  dy[5] = 2;
  for (let i = 6; i <= Math.max(...ary); i++) {
    dy[i] = dy[i - 2] + dy[i - 3];
  }

  for (const x of ary) {
    answer.push(dy[x]);
  }

  return answer.join('\n');
}

console.log(solution(numAry));
