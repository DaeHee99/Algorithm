def solution(sizes):
    max_width = 0
    max_height = 0
    
    for size in sizes:
        size.sort()
        
        if max_width < size[0]: max_width = size[0]
        if max_height < size[1]: max_height = size[1]
        
    return max_width * max_height
