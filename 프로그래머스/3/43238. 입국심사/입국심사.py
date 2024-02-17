def solution(n, times):
    low_time = 0
    high_time = max(times) * n
    
    while low_time <= high_time:
        mid_time = (low_time + high_time) // 2
        
        mid_n = 0
        for time in times:
            mid_n += mid_time // time
        
        if mid_n >= n:
            high_time = mid_time - 1
        else:
            low_time = mid_time + 1
    
    return low_time
