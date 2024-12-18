const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [s, n] = input;

console.log(s[n - 1]);
