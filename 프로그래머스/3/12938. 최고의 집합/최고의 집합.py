def solution(n, s):
    if n > s:
        return [-1]
    
    answer = []
    
    while n > 0:
        value = s // n
        answer.append(value)
        s -= value
        n -= 1
    
    return answer
