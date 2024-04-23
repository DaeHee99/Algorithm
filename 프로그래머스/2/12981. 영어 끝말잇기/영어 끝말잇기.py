def solution(n, words):
    dic = {}
    dic[words[0]] = True
    
    for i in range(1, len(words)):
        before, now = words[i-1], words[i]
        
        if now in dic or before[-1] != now[0]:
            return [(i % n) + 1, i // n + 1]
        
        dic[now] = True
    
    return [0, 0]
