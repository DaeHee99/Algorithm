from collections import defaultdict

def solution(clothes):
    answer = 1
    _dict = defaultdict(int)
    
    for _, clothType in clothes:
        _dict[clothType] += 1
    
    for count in _dict.values():
        answer *= (count + 1)
    
    return answer - 1
