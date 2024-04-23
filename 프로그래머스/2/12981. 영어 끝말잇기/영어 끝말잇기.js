function solution(n, words) {
    const dict = {};
    dict[words[0]] = true;
    
    for (let i = 1; i < words.length; i++) {
        const [before, now] = [words[i-1], words[i]];
        
        if (dict[now] || before.charAt(before.length-1) !== now.charAt(0)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        dict[now] = true;
    }
    
    return [0, 0];
}
