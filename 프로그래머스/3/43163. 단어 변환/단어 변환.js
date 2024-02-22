function solution(begin, target, words) {
    words.push(begin);
    
    let answer = words.length;
    const target_index = words.indexOf(target);
    
    if (target_index === -1) return 0;
    
    const graph = words.map(word1 => {
        const link = [];
        
        words.forEach((word2, index) => {
            let count = 0;
            
            for (let i = 0; i < word1.length; i++) {
                if (word1[i] !== word2[i]) count++;
            }
            
            if (count === 1) link.push(index);
        });
        
        return link;
    });
    
    const dfs = (node, dist, visited) => {
        if (node === target_index) {
            if (answer > dist) answer = dist;
            return;
        }
        
        visited[node] = true;
        
        graph[node].forEach(child => {
            if (!visited[child]) {
                dfs(child, dist+1, visited);
            }
        });
    };
    
    dfs(words.length-1, 0, new Array(words.length).fill(false));
    
    return answer;
}
