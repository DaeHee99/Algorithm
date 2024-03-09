function solution(name) {
    let answer = 0;
    let min_dist = name.length - 1;
    
    const up_down = name.split("").map(c => {
        const dist = Math.min(c.charCodeAt() - 65, 91 - c.charCodeAt());
        answer += dist;
        return dist;
    });
    
    for (let i = 0; i < up_down.length; i++) {
        let next = i + 1;
        
        while (next < up_down.length && up_down[next] === 0) {
            next++;
        }
        
        min_dist = Math.min(
            min_dist,
            i * 2 + up_down.length - next,
            i + (up_down.length - next) * 2
        );
    }
    
    return answer + min_dist;
}