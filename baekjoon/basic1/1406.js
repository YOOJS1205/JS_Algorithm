// 에디터
// 커서를 기준으로 두 개의 스택으로 나누자.
// 그냥 배열로 쓰면 시간 초과뜬다...
// 꼭 다시 풀어보기

let fs = require('fs');
let input = fs.readFileSync('../example.txt').toString().split('\n');

function solution(input) {
  let wordAry = input[0].split('');
  input.shift();
  input.shift();

  let inputAry = input.map((item) => item.split(' '));

  let leftStack = wordAry;
  let rightStack = [];

  for (const x of inputAry) {
    switch (x[0]) {
      case 'L':
        leftStack.length && rightStack.push(leftStack.pop());
        break;
      case 'D':
        rightStack.length && leftStack.push(rightStack.pop());
        break;
      case 'B':
        leftStack.length && leftStack.pop();
        break;
      case 'P':
        leftStack.push(x[1]);
        break;
      default:
        break;
    }
  }
  console.log(leftStack.concat(rightStack.reverse()).join(''));
}

solution(input);
