from heapq import heapify, heappush, heappop

def solution(operations):
    heap = []
    
    for operation in operations:
        command, num = operation.split()
        num = int(num)
        
        if command == 'I': heappush(heap, num)
        elif len(heap) == 0: continue
        elif num == -1: heappop(heap)
        else:
            heap.remove(max(heap))
            heapify(heap)
            
    return [0, 0] if len(heap) == 0 else [max(heap), heap[0]]