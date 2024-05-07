function solution(k, tangerine) {
    let count = 0;
    const counter = {};
    
    tangerine.forEach(item => {
        counter[item] = (counter[item] || 0) + 1;
    })
    
    const sorted_counter = Object.entries(counter).sort(([, a], [, b]) => b - a);
    
    for (let i = 0; i < sorted_counter.length; i++) {
        count += sorted_counter[i][1];
        if (count >= k) return i + 1;
    }
    
    return sorted_counter.length;
}