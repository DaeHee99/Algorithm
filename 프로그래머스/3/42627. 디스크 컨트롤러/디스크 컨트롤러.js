function solution(jobs) {
    let answer = 0;
    let n = jobs.length;
    let time = 0;
    
    jobs.sort((a, b) => a[0] - b[0]);
    
    while (jobs.length > 0) {
        const waiting = jobs.filter(job => job[0] <= time);

        if (waiting.length === 0) time = jobs[0][0];
        else {
            waiting.sort((a, b) => a[1] - b[1]);
            
            const [req, usage] = waiting[0];
            time += usage;
            answer += time - req;
            
            jobs = jobs.filter(job => job[0] !== req || job[1] !== usage);
        }
    }
    
    return (answer / n) >> 0;
}
