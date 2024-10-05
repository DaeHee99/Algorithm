import heapq

def solution(n, works):
    heap = [-num for num in works]
    heapq.heapify(heap)

    for _ in range(n):
        if not heap:
            return 0
        max_work = heapq.heappop(heap)
        if max_work < 0:
            heapq.heappush(heap, max_work + 1)

    return sum(x**2 for x in heap)
