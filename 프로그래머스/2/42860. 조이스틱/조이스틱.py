def solution(name):
    up_down = [min(ord(c) - 65, 91 - ord(c)) for c in name]
    min_dist = len(up_down) - 1
    answer = sum(up_down)
    
    for i in range(len(up_down)):
        next = i + 1
        while next < len(up_down) and up_down[next] == 0:
            next += 1
        
        min_dist = min(
            min_dist,
            i * 2 + len(up_down) - next,
            i + (len(up_down) - next) * 2
        )
    
    return answer + min_dist