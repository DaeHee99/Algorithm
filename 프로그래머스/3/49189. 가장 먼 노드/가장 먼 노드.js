function solution(n, edge) {
    let answer = n - 1;
    const queue = [1];
    const graph = Array.from({length: n+1}, () => []);
    
    edge.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    
    while (true) {
        [...queue].forEach(node => {
            queue.shift();
            if (graph[node].length) {
                queue.push(...graph[node]);
                graph[node] = [];
                n--;
            }
        });
        
        if (n === 0) return answer;
        answer = n;
    }
}
