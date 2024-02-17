function make_group(group, tree, v1, v2_not) {
    tree[v1].forEach(v2 => {
        if (v2 !== v2_not && !group.includes(v2)) {
            group.push(v2);
            make_group(group, tree, v2, v2_not);
        }
    });
}

function solution(n, wires) {
    let answer = n;
    const tree = [0];
    
    wires.forEach(([a, b]) => {
        if (tree[a]) tree[a].push(b);
        else tree[a] = [b];
        
        if (tree[b]) tree[b].push(a);
        else tree[b] = [a];
    });
    
    wires.forEach(([a, b]) => {
        const group_a = [a];
        const group_b = [b];
        
        make_group(group_a, tree, a, b);
        make_group(group_b, tree, b, a);
        
        const diff = Math.abs(group_a.length - group_b.length);
        if (answer > diff) answer = diff;
    });
    
    return answer;
}