from collections import deque

def solution(n, edge):
    answer = n - 1
    queue = deque([1])
    graph = [[] for _ in range(n+1)]
    
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)
    
    while True:
        for _ in range(len(queue)):
            node = queue.popleft()
            if graph[node]:
                queue.extend(graph[node])
                graph[node] = []
                n -= 1
        
        if n == 0: return answer
        answer = n