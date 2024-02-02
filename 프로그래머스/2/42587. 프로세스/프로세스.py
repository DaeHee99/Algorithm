def solution(priorities, location):
    n = len(priorities)
    pivot = 0
    
    for i in range(n):
        _max = max(priorities)
        
        while priorities[pivot % n] < _max:
            pivot += 1
        
        priorities[pivot % n] = 0
        
        if pivot % n == location:
            return i + 1
