function solution(A, B) {
    let answer = 0;
    let A_index = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    B.forEach(num => {
        if (num > A[A_index]) {
            answer++;
            A_index++;
        }
    });
    
    return answer;
}
