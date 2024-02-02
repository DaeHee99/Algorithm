def solution(prices):
    n = len(prices)
    stack = []
    answer = list(range(n-1, -1, -1))
    
    for i in range(n):
        while stack and prices[i] < prices[stack[-1]]:
            top = stack.pop()
            answer[top] = i - top
        stack.append(i)
    
    return answer
