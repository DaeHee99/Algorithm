def make_group(group, tree, v1, v2_not):
    for v2 in tree[v1]:
        if v2 == v2_not or v2 in group:
            continue
        group.append(v2)
        make_group(group, tree, v2, v2_not)

def solution(n, wires):
    answer = n
    tree = [[] for _ in range(n + 1)]
    
    for a, b in wires:
        tree[a].append(b)
        tree[b].append(a)
    
    for a, b in wires:
        group_a = [a];
        group_b = [b];
        
        make_group(group_a, tree, a, b);
        make_group(group_b, tree, b, a);
        
        diff = abs(len(group_a) - len(group_b));
        if answer > diff: answer = diff;
    
    return answer