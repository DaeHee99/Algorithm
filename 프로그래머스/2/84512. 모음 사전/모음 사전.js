function solution(word) {
    let answer = 0;
    
    const find_word = (string) => {
        if (string === word) return true;
        if (string.length === 5) return false;
        
        for (const char of ['A', 'E', 'I', 'O', 'U']) {
            answer++;
            if (find_word(string + char)) return true;
        }
    };
    
    find_word("");
    
    return answer;
}