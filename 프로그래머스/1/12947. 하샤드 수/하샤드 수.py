def solution(x):
    hap = sum(map(int, list(str(x))))
    return x % hap == 0
