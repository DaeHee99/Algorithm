function solution(elements) {
    const set = new Set();
    
    for (let l = 1; l <= elements.length; l++) {
        for (let i = 0; i < elements.length; i++) {
            let sum = 0;
            for (let j = i; j < i + l; j++) {
                sum += elements[j % elements.length];
            }
            set.add(sum);
        }
    }
    
    return set.size;
}
