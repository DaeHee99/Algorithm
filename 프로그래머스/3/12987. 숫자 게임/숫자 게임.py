def solution(A, B):
    answer = 0
    A_index = 0
    
    A.sort()
    B.sort()
    
    for num in B:
        if num > A[A_index]:
            answer += 1
            A_index += 1
    
    return answer
