def solution(n, computers):
    answer = 0
    visited = [False for _ in range(n)]
    
    def dfs(parent):
        visited[parent] = True
        for child in range(n):
            if computers[parent][child] == 1 and not visited[child]:
                dfs(child)
    
    for root in range(n):
        if not visited[root]:
            dfs(root)
            answer += 1
    
    return answer
