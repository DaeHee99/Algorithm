function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    rocks = [0, ...rocks, distance];
    
    const gap = rocks.map((rock, index) => rocks[index + 1] - rock)
                     .slice(0, rocks.length - 1);
    
    let [left, right] = [0, distance + 1];
    
    while (left < right) {
        let sum = 0;
        let count = 0;
        const mid = ((left + right) / 2) >> 0;
        
        gap.forEach(val => {
            sum += val;
            if (sum < mid) count++;
            else sum = 0;
        });
        
        if (count > n) right = mid;
        else left = mid + 1;
    }
    
    return left - 1;
}
