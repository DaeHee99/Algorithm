function solution(n) {
    const hanoi = (n, from, temp, to) => {
        if (n === 1) return [[from, to]];
        return [...hanoi(n-1, from, to, temp), [from, to], ...hanoi(n-1, temp, from, to)];
    }
    
    return hanoi(n, 1, 2, 3);
}