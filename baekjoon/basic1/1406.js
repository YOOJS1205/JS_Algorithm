// 에디터

let fs = require('fs');
let input = fs.readFileSync('../example.txt').toString().split('\n');

// function solution(input) {
//   let inputAry = input.map((item) => item.split(' '));
//   let cursor = wordAry.length;
//   for (const x of inputAry) {
//     switch (x[0]) {
//       case 'L':
//         cursor && cursor--;
//         break;
//       case 'D':
//         cursor !== wordAry.length && cursor++;
//         break;
//       case 'B':
//         if (cursor) {
//           wordAry.splice(cursor - 1, 1);
//           cursor--;
//         }
//         break;
//       case 'P':
//         wordAry.splice(cursor, 0, x[1]);
//         cursor++;
//         break;
//       default:
//         break;
//     }
//   }
//   console.log(wordAry.join(''));
// }

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
