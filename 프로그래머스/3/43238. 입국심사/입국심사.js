function solution(n, times) {
    let low_time = 0;
    let high_time = Math.max(...times) * n;
    
    while (low_time <= high_time) {
        const mid_time = Math.floor((low_time + high_time) / 2);
        
        const mid_n = times.reduce((acc, time) => acc += Math.floor(mid_time / time), 0);

        if (mid_n >= n) high_time = mid_time - 1;
        else low_time = mid_time + 1;
    }
    
    return low_time;
}