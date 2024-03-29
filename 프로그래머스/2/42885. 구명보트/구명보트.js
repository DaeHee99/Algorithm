function solution(people, limit) {
    let answer = 0;
    let [i, j] = [0, people.length-1];
    
    people.sort((a, b) => a - b);
    
    while (i <= j) {
        if (people[i] + people[j] <= limit) i++;
        answer++;
        j--;
    }
    
    return answer;
}
