function solution(n, costs) {
    let answer = 0;
    const parent = new Array(n).fill().map((_, i) => i);
    
    const getParent = (child) => {
        if (parent[child] === child) return child;
        return parent[child] = getParent(parent[child]);
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    costs.forEach(([a, b, cost]) => {
        const parent_a = getParent(a);
        const parent_b = getParent(b);
        
        if (parent_a !== parent_b) {
            answer += cost;
            parent[parent_b] = parent_a;
        }
    });
    
    return answer;
}
