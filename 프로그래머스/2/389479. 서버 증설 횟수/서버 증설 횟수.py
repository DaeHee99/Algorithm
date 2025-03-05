def solution(players, m, k):
    answer = 0
    server = [0 for _ in range(24)]
    
    for time, player in enumerate(players):
        nowServer = player // m
        plusServer = nowServer - server[time]
        if plusServer > 0:
            answer += plusServer
            for i in range(time, time+k):
                if i > 23: break
                server[i] += plusServer
    
    return answer
