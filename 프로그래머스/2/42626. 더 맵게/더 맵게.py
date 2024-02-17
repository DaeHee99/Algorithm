from heapq import heapify, heappush, heappop

def solution(scoville, K):
    answer = 0
    heapify(scoville)
    
    while scoville[0] < K:
        if len(scoville) < 2: return -1
        answer += 1
        a = heappop(scoville)
        b = heappop(scoville)
        heappush(scoville, a + b * 2)
    
    return answer
