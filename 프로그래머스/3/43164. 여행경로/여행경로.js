function solution(tickets) {
    const answer = [];
    const visit = new Array(tickets.length).fill(false);
    
    const dfs = (path) => {
        if (path.length === tickets.length + 1) {
            answer.push(path.join());
            return;
        }
        
        const start = path.at(-1);
        
        tickets.forEach((ticket, index) => {
            if (ticket[0] === start && !visit[index]) {
                visit[index] = true;
                path.push(ticket[1]);
                dfs(path);
                path.pop();
                visit[index] = false;
            }
        });
    };
    
    dfs(["ICN"]);
    
    return answer.sort()[0].split(",");
}
