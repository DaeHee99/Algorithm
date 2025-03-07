def solution(arr1, arr2):
    answer = []
    
    for i in range(len(arr1)):
        row = []
        for j in range(len(arr2[0])):
            s = 0
            for k in range(len(arr1[0])):
                s += arr1[i][k] * arr2[k][j]
            row.append(s)
        answer.append(row)
    
    return answer
