def solution(answers):
    answer = []
    points = [0, 0, 0]
    man = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    for index, ans in enumerate(answers):
        for i in range(3):
            if ans == man[i][index % len(man[i])]:
                points[i] += 1
    
    max_point = max(points)
    
    for i in range(3):
        if max_point == points[i]: answer.append(i + 1)
    
    return answer