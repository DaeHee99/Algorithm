function solution(n, lost, reserve) {
    const new_lost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b);
    const new_reserve = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b);
    let answer = n - new_lost.length;
    
    new_lost.forEach(target => {
        const a = new_reserve.indexOf(target - 1);
        const b = new_reserve.indexOf(target + 1);

        if (a >= 0) {
            new_reserve.splice(a, 1);
            answer++;
        }
        else if (b >= 0) {
            new_reserve.splice(b, 1);
            answer++;
        }
    });
    
    return answer;
}
