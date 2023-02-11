let fs = require('fs');
let inputNum = +fs.readFileSync('../../example.txt').toString().trim();

function solution(num) {
  let dy = Array.from({ length: num + 1 }, () => 0);
  dy[2] = 1;
  dy[3] = 1;

  for (let i = 4; i <= num; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      dy[i] = Math.min(dy[i - 1] + 1, dy[i / 3] + 1, dy[i / 2] + 1);
    } else if (i % 3 === 0) {
      dy[i] = Math.min(dy[i - 1] + 1, dy[i / 3] + 1);
    } else if (i % 2 === 0) {
      dy[i] = Math.min(dy[i - 1] + 1, dy[i / 2] + 1);
    } else {
      dy[i] = dy[i - 1] + 1;
    }
  }

  return dy[num];
}

console.log(solution(inputNum));
