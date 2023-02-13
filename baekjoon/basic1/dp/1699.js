let fs = require('fs');
let inputNum = +fs.readFileSync('../../example.txt').toString().trim();

function solution(num) {
  if (Math.sqrt(num) === parseInt(Math.sqrt(num))) {
    return 1;
  }
  let dy = Array.from({ length: num + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  dy[3] = 3;
  for (let i = 4; i <= num; i++) {
    if (Math.sqrt(i) === parseInt(Math.sqrt(i))) {
      dy[i] = 1;
    } else {
      let minusNum = parseInt(Math.sqrt(i));
      let temp = Number.MAX_SAFE_INTEGER;
      for (let j = 1; j <= minusNum; j++) {
        temp > dy[i - Math.pow(j, 2)] + 1 ? (temp = dy[i - Math.pow(j, 2)] + 1) : temp;
      }
      dy[i] = temp;
    }
  }
  return dy[num];
}

console.log(solution(inputNum));
