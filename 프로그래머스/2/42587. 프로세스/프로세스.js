function solution(priorities, location) {
    const n = priorities.length;
    let pivot = 0;
    
    for (let i = 0; i < n; i++) {
        const max = Math.max(...priorities);
        
        while (priorities[pivot % n] < max) pivot++;
        
        priorities[pivot % n] = 0;
        
        if (pivot % n === location) return i + 1;
    }
}