function solution(want, number, discount) {
    let answer = 0;
    const count = {};
    
    for (let i = 0; i < 10; i++) {
        count[discount[i]] = (count[discount[i]] | 0) + 1;
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        if (want.every((item, index) => count[item] === number[index])) {
            answer++;
        }
        count[discount[i]] -= 1;
        count[discount[i+10]] = (count[discount[i+10]] | 0) + 1;
    }
    
    return answer;
}
