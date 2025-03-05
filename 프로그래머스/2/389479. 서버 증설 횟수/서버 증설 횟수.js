function solution(players, m, k) {
    let answer = 0;
    const server = players.map(_ => 0);
    
    players.forEach((player, time) => {
        const nowServer = (player / m) >> 0;
        const plusServer = nowServer - server[time];
        if (plusServer > 0) {
            answer += plusServer;
            for (let i = time; i < time + k; i++) {
                if (i > 23) break;
                server[i] += plusServer;
            }
        }
    });
    
    return answer;
}
