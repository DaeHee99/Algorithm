from collections import Counter

def solution(want, number, discount):
    answer = 0
    count = Counter(discount[:10])
    
    for i in range(len(discount) - 9):
        if all(count[item] == num for item, num in zip(want, number)):
            answer += 1
        if i + 10 < len(discount):
            count[discount[i]] -= 1
            count[discount[i+10]] += 1
    
    return answer
