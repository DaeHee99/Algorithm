function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    const dfs = (parent) => {
        visited[parent] = true;
        
        for (let child = 0; child < n; child++) {
            if (computers[parent][child] === 1 && visited[child] === false) {
                dfs(child);
            }
        }
    }
    
    for (let root = 0; root < n; root++) {
        if (visited[root] === false) {
            dfs(root);
            answer++;
        }
    }
    
    return answer;
}