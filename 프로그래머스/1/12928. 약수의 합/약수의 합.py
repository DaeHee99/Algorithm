def solution(n):
    return sum([i for i in range(1, n) if n % i == 0]) + n
