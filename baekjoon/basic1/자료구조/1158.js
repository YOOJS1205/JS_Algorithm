// 요세푸스 문제

let fs = require('fs');
let inputAry = fs.readFileSync('../example.txt').toString().split(' ');

const peopleNum = inputAry[0];
const deleteNum = inputAry[1];

function solution(peopleNum, deleteNum) {
  let peopleAry = Array.from({ length: peopleNum }, (v, i) => i + 1);
  let stack = [];

  while (stack.length !== peopleNum) {
    stack.push(peopleAry[deleteNum - 1] % peopleAry.length);
    peopleAry.slice(deleteNum - 1, 1);
    deleteNum += 3;
  }
  console.log(stack);
}

solution(peopleNum, deleteNum);
