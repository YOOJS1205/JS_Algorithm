// 수가 너무 커질 수 있으므로 BigInt 고려해야함

let fs = require('fs');
let inputNum = +fs.readFileSync('../../example.txt').toString().trim();

function solution(num) {
  let dy = Array.from({ length: num + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 1;
  for (let i = 3; i <= num; i++) {
    dy[i] = BigInt(dy[i - 1]) + BigInt(dy[i - 2]);
  }
  return dy[num];
}

console.log(String(solution(inputNum)));
