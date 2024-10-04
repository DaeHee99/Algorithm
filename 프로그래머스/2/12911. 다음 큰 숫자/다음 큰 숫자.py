def count_1(n):
    return bin(n).count('1')

def solution(n):
    target_count = count_1(n)
    number = n + 1

    while count_1(number) != target_count:
        number += 1

    return number
