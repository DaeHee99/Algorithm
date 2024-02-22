function solution(numbers, target) {
    let answer = 0;
    const n = numbers.length;
    
    const dfs = (sum, index) => {
        if (index === n) {
            if (sum === target) answer++;
            return;
        }
        
        dfs(sum + numbers[index], index + 1);
        dfs(sum - numbers[index], index + 1);
    }
    
    dfs(0, 0);
    
    return answer;
}
