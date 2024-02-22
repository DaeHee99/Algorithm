def solution(begin, target, words):
    if target not in words: return 0 
    
    words.append(begin)
    
    answer = len(words)
    target_index = words.index(target)
    
    graph = []
    
    for word1 in words:
        link = []
        for index, word2 in enumerate(words):
            count = 0
            for i in range(len(word1)):
                if word1[i] != word2[i]:
                    count += 1
            if count == 1:
                link.append(index)
        graph.append(link)
    
    def dfs(node, dist, visited):
        nonlocal answer
        if node == target_index:
            if answer > dist: answer = dist
            return
        
        visited[node] = True
        
        for child in graph[node]:
            if not visited[child]:
                dfs(child, dist+1, visited)
        
    dfs(len(words)-1, 0, [False for _ in range(len(words))])
    
    return answer
