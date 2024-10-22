const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, cards, M, nums] = input;

const objs = {};

cards.split(" ").forEach((item) => (objs[item] = true));

const answer = nums.split(" ").map((item) => (objs[item] ? 1 : 0));

console.log(answer.join(" "));
