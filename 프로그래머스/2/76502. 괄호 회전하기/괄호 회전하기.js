function check(s) {
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        const c = s[i];
        const h = stack.at(-1);
        if (h === '(' && c === ')') stack.pop();
        else if (h === '[' && c === ']') stack.pop();
        else if (h === '{' && c === '}') stack.pop();
        else stack.push(c);
    }
    
    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        const newString = s.slice(i) + s.slice(0, i);
        if (check(newString)) answer++;
    }
    
    return answer;
}
