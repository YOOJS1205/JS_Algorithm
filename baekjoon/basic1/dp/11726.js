let fs = require('fs');
let inputNum = +fs.readFileSync('../../example.txt').toString();

function solution(num) {
  if (num === 1 || num === 2) {
    return num;
  } else {
    let dy = Array.from({ length: num + 1 }, () => 0);

    dy[1] = 1;
    dy[2] = 2;

    for (let i = 3; i <= num; i++) {
      dy[i] = ((dy[i - 1] % 10007) + (dy[i - 2] % 10007)) % 10007;
    }

    return dy[num];
  }
}

console.log(solution(inputNum));
