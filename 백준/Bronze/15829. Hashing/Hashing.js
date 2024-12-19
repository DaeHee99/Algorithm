const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [l, s] = input;
let answer = 0;

for (let i = 0; i < Number(l); i++) {
  const a = s[i].charCodeAt() - "a".charCodeAt() + 1;
  answer += a * 31 ** i;
}

console.log(answer % 1234567891);
