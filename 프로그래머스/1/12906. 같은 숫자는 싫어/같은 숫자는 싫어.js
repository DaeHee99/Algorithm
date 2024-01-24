function solution(arr) {
    const answer = arr.filter((num, index) => {
        return !index || arr[index - 1] !== num;
    });
    
    return answer;
}
