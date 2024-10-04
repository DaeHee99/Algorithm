def solution(s):
    answer = [0, 0]
    
    while s != "1":
        length = len(s)
        count_0 = s.count('0')
        s = bin(length - count_0)[2:]
        answer[1] += count_0
        answer[0] += 1
    
    return answer
