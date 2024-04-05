def solution(distance, rocks, n):
    rocks.sort()
    rocks = [0] + rocks + [distance]
    
    gap = [rocks[i + 1] - rocks[i] for i in range(len(rocks) - 1)]

    left = 0
    right = distance + 1
    
    while left < right:
        _sum = 0
        _count = 0
        mid = (left + right) // 2
        
        for val in gap:
            _sum += val
            if _sum < mid:
                _count += 1
            else:
                _sum = 0
        
        if _count > n:
            right = mid
        else:
            left = mid + 1
    
    return left - 1