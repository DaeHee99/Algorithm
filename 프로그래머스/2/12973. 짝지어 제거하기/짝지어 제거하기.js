function solution(s)
{
    const stack = [];
    
    s.split("").forEach(c => {
        if (stack.length > 0 && stack.at(-1) === c) {
            stack.pop();
        }
        else {
            stack.push(c);
        }
    });
    
    return stack.length === 0 ? 1 : 0;
}
