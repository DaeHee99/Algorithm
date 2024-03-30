def solution(routes):
    routes = sorted(routes, key=lambda x: (x[1], x[0]))
    
    answer = 1
    last_camera = routes[0][1]
    
    for a, b in routes:
        if a > last_camera:
            last_camera = b
            answer += 1
    
    return answer
