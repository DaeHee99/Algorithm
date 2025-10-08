function solution(n, path, order) {
    const graph = Array.from({ length: n }, () => []);
    for (const [a, b] of path) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const prereq = new Map();
    const waitingFor = new Map();
    
    for (const [a, b] of order) {
        prereq.set(b, a);
        waitingFor.set(a, b);
    }
    
    if (prereq.has(0)) {
        return false;
    }
    
    const visited = new Set();
    const blocked = new Set();
    const queue = [0];
    visited.add(0);
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        const unblocked = waitingFor.get(current);
        if (unblocked !== undefined && blocked.has(unblocked)) {
            blocked.delete(unblocked);
            visited.add(unblocked);
            queue.push(unblocked);
        }
        
        for (const next of graph[current]) {
            if (visited.has(next) || blocked.has(next)) continue;
            
            const pre = prereq.get(next);
            if (pre !== undefined && !visited.has(pre)) {
                blocked.add(next);
                waitingFor.set(pre, next);
            } else {
                visited.add(next);
                queue.push(next);
            }
        }
    }
    
    return visited.size === n;
}
