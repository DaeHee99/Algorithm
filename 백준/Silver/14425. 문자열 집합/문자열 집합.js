const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const set = input.slice(1, N + 1);

const countMap = new Map();
for (let i = N + 1; i < N + 1 + M; i++) {
  const str = input[i];
  countMap.set(str, (countMap.get(str) || 0) + 1);
}

let answer = 0;

for (const str of set) {
  answer += countMap.get(str) || 0;
}

console.log(answer);
