from functools import cmp_to_key

def compare(x, y):
    a = int(x + y)
    b = int(y + x)
    
    return (a < b) - (a > b)

def solution(numbers):
    numbers = map(str, numbers)
    numbers = sorted(numbers, key=cmp_to_key(compare))
    answer = "".join(numbers)
    
    return "0" if answer[0] == "0" else answer