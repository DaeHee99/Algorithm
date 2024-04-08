function solution(n, s) {
    if (n > s) return [-1];
    
    const answer = [];
    
    while (n > 0) {
        const value = (s / n) >> 0;
        answer.push(value);
        s -= value;
        n -= 1;
    }
    
    return answer;
}
