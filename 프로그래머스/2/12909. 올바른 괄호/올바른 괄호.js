function solution(s) {
    const stack = [];

    for (const c of s) {
        if (c === ")" && stack.slice(-1)[0] === "(") stack.pop();
        else stack.push(c);
    }

    return stack.length === 0;
}