function solution(progresses, speeds) {
    const answer = [];
    let count = 0;
    let max = 0;
    
    progresses.forEach((progress, index) => {
        const day = Math.ceil((100 - progress) / speeds[index]);
        
        if (day <= max) count++;
        else {
            max = day;
            count && answer.push(count);
            count = 1;
        }
    });
    
    return [...answer, count];
}