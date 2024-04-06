def solution(n):
    def hanoi(n, start, temp, end):
        if n == 1:
            return [[start, end]]
        return hanoi(n-1, start, end, temp) + [[start, end]] + hanoi(n-1, temp, start, end)
    
    return hanoi(n, 1, 2, 3)