def solution(n):
    answer = 1
    
    for start in range(1, n//2 + 1):
        sum, num = 0, start
        while sum < n:
            sum += num
            num += 1
        if sum == n:
            answer += 1
        
    return answer
