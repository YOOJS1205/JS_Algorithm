// 애초에 15746으로 나눈 나머지를 배열에 넣어주기!

let fs = require('fs');
let inputNum = +fs.readFileSync('../example.txt').toString().trim();

function solution(num) {
  let dy = Array.from({ length: num + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= num; i++) {
    dy[i] = (dy[i - 1] + dy[i - 2]) % 15746;
  }
  return dy[num];
}

console.log(solution(inputNum));
