from itertools import permutations

def isPrime(num):
    if num < 2: return False

    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    
    return True

def solution(numbers):
    answer = 0
    numbers_list = list(numbers)
    numbers_set = set()
    
    for i in range(1, len(numbers)+1):
        for num in permutations(numbers_list, i):
            numbers_set.add(int(''.join(num)))
    
    for num in numbers_set:
        if isPrime(num): answer += 1
        
    return answer
