// 큐
// 배열로 구현함
let fs = require('fs');
let input = fs.readFileSync('../example.txt').toString().split('\n');
input.shift();

// 큐 구현
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(order) {
  let answer = [];
  const orderAry = order.map((item) => item.split(' '));
  const queue = new Queue();
  for (const x of orderAry) {
    switch (x[0]) {
      case 'push':
        queue.enqueue(Number(x[1]));
        break;
      case 'pop':
        queue.size() ? answer.push(queue.dequeue()) : answer.push(-1);
        break;
      case 'size':
        answer.push(queue.size());
        break;
      case 'empty':
        queue.size() ? answer.push(0) : answer.push(1);
        break;
      case 'front':
        queue.size() ? answer.push(queue.queue[queue.front]) : answer.push(-1);
        break;
      case 'back':
        queue.size() ? answer.push(queue.queue[queue.rear - 1]) : answer.push(-1);
        break;
      default:
        break;
    }
  }
  console.log(answer.join('\n'));
}

solution(input);
