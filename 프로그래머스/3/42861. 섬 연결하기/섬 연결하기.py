def solution(n, costs):
    answer = 0
    parent = list(range(n))
    
    def get_parent(child):
        if parent[child] == child:
            return child
        parent[child] = get_parent(parent[child])
        return parent[child]
    
    costs.sort(key=lambda x: x[2])
    
    for a, b, cost in costs:
        parent_a = get_parent(a)
        parent_b = get_parent(b)
        
        if parent_a != parent_b:
            answer += cost
            parent[parent_b] = parent_a
            
    return answer
