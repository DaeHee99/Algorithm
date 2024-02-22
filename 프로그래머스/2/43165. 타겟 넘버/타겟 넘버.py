def solution(numbers, target):
    answer = 0
    n = len(numbers)
    
    def dfs(_sum, _index):
        nonlocal answer
        
        if _index == n:
            if _sum == target: answer += 1
            return
        
        dfs(_sum + numbers[_index], _index + 1)
        dfs(_sum - numbers[_index], _index + 1)
        
    dfs(0, 0)
    
    return answer
