function solution(prices) {
    const n = prices.length;
    const answer = Array.from({ length: n }, (_, index) => n - index - 1);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && prices[i] < prices[stack.slice(-1)[0]]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i);
    }
    
    return answer;
}
