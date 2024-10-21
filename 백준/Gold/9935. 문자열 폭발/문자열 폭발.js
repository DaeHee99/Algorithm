const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [str, sub] = input;

function solution(str, sub) {
  const q = [];

  for (let i = 0; i < str.length; i++) {
    q.push(str[i]);

    if (q.length >= sub.length) {
      const lastStr = q.slice(-sub.length).join("");

      if (lastStr === sub) {
        q.splice(-sub.length);
      }
    }
  }

  return q.join("") || "FRULA";
}

console.log(solution(str, sub));
