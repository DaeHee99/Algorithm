const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [l, s] = input;
const M = 1234567891;
const R = 31;
let answer = 0;
let rPower = 1;

for (let i = 0; i < Number(l); i++) {
  const a = s[i].charCodeAt() - "a".charCodeAt() + 1;
  answer = (answer + ((a * rPower) % M)) % M;
  rPower = (rPower * R) % M;
}

console.log(answer);
