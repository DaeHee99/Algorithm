function solution(answers) {
    const answer = [];
    const points = [0, 0, 0];
    const man = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    answers.forEach((answer, index) => {
        for (let i = 0; i < 3; i++) {
            if (answer === man[i][index % man[i].length]) {
                points[i] += 1;
            };
        };
    });
    
    const max_point = Math.max(...points);
    
    for (let i = 0; i < 3; i++) {
        if (max_point === points[i]) answer.push(i + 1);
    }
    
    return answer;
}