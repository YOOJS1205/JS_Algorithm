// 덱
// 스택 + 큐의 자료구조

let fs = require('fs');
let inputAry = fs.readFileSync('../example.txt').toString().split('\n');
inputAry.shift();

class Deque {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = item;
    this.tail++;
  }

  push_back(item) {
    this.arr[this.tail++] = item;
  }

  pop_front() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[this.head++];
      delete this.arr[this.head++];
      return result;
    }
  }

  pop_back() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[--this.tail];
      delete this.arr[--this.tail];
      return result;
    }
  }
}

function solution(order) {
  const orderAry = order.map((item) => item.split(' '));
  let deque = new Deque();
  let answer = [];
  for (const x of orderAry) {
    console.log(deque);
    switch (x[0]) {
      case 'push_front':
        deque.push_front(Number(x[1]));
        break;
      case 'push_back':
        deque.push_back(Number(x[1]));
        break;
      case 'pop_front':
        deque.arr.length ? answer.push(deque.pop_front()) : answer.push(-1);
        break;
      case 'pop_back':
        deque.arr.length ? answer.push(deque.pop_back()) : answer.push(-1);
        break;
      case 'size':
        answer.push(deque.arr.length);
        break;
      case 'empty':
        deque.arr.length ? answer.push(0) : answer.push(1);
        break;
      case 'front':
        deque.arr.length ? answer.push(deque.arr[deque.head]) : answer.push(-1);
        break;
      case 'back':
        deque.arr.length ? answer.push(deque.arr[deque.tail - 1]) : answer.push(-1);
        break;
      default:
        break;
    }
  }
  console.log(answer.join('\n'));
}

solution(inputAry);
