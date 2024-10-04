function solution(s) {
    const answer = [0, 0];
    
    while (s !== "1") {
        const len = s.length;
        const count_0 = [...s].filter(char => char === '0').length;
        s = (len - count_0).toString(2);
        answer[1] += count_0;
        answer[0] += 1;
    }
    
    return answer;
}
