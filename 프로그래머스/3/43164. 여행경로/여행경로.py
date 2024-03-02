def solution(tickets):
    answer = []
    visit = [False] * len(tickets)
    
    def dfs(path):
        if len(path) == len(tickets) + 1:
            answer.append(",".join(path))
            return
        
        start = path[-1]
        
        for index, ticket in enumerate(tickets):
            if ticket[0] == start and not visit[index]:
                visit[index] = True
                path.append(ticket[1])
                dfs(path)
                path.pop()
                visit[index] = False
        
    dfs(["ICN"])
    
    return sorted(answer)[0].split(",")
