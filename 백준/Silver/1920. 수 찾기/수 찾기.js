const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, n_num, m, m_sum] = input;

const obj = {};

n_num.split(" ").forEach((k) => (obj[k] = true));
m_sum.split(" ").forEach((k) => console.log(obj[k] ? 1 : 0));
