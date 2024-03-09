function solution(number, k) {
    const stack = [];
    
    for (let num of number) {
        while (stack.length && stack.at(-1) < num && k) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    
    return stack.slice(0, number.length-k).join("");
}
