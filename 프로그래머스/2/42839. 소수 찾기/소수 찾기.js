function permutation(arr, num) {
    const res = [];
    if (num === 1) return arr.map((v) => [v]);
    
    arr.forEach((v, idx, arr) => {
        const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
        const permutations = permutation(rest, num-1);
        const attach = permutations.map((permutation) => [v, ...permutation]);
        res.push(...attach);
    });
    
    return res;
}

function isPrime(num) {
    if (num < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(numbers) {
    let answer = 0;
    const numbers_arr = numbers.split("");
    const numbers_set = new Set();
    
    for (let len = 1; len < numbers.length+1; len++) {
        permutation(numbers_arr, len).forEach(item => {
            numbers_set.add(parseInt(item.join("")));
        });
    }
    
    numbers_set.forEach(num => {
        if (isPrime(num)) answer++;
    })
    
    return answer;
}
