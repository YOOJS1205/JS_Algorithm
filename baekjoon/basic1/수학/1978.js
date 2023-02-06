// 소수 찾기
// 루트까지 반복문을 돌리는 것이 핵심

let fs = require('fs');
let input = fs.readFileSync('../../example.txt').toString().trim().split('\n');

let numbers = input[1].split(' ').map((item) => +item);

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  console.log(numbers.filter((item) => isPrime(item)).length);
}

solution(numbers);
