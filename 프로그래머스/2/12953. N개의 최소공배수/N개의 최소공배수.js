function solution(arr) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    
    return arr.reduce((acc, val) => {
        return lcm(acc, val);
    }, 1);
}
