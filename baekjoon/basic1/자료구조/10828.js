// 매번 출력하면 시간초과 발생! 한번에 출력하자!
// switch 문을 사용하는게 더 좋을 듯

let fs = require('fs');
let input = fs.readFileSync('../example.txt').toString();

const orderAry = input.split('\n');
const newOrderAry = orderAry.map((item) => item.split(' '));

function solution(order) {
  let ary = [];
  let answer = [];
  for (const x of order) {
    if (x[0] === 'push') {
      ary.push(Number(x[1]));
    } else if (x[0] === 'pop') {
      if (ary.length) {
        answer.push(ary.pop());
      } else {
        answer.push(-1);
      }
    } else if (x[0] === 'size') {
      answer.push(ary.length);
    } else if (x[0] === 'empty') {
      if (ary.length) {
        answer.push(0);
      } else {
        answer.push(1);
      }
    } else if (x[0] === 'top') {
      if (ary.length) {
        answer.push(ary[ary.length - 1]);
      } else {
        answer.push(-1);
      }
    }
  }
  console.log(ary.join('\n'));
}

solution(newOrderAry);
