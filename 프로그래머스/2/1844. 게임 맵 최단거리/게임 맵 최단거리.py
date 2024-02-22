def solution(maps):
    len_x = len(maps)
    len_y = len(maps[0])
    next_ = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    
    queue = [[0, 0, 1]]
    
    while queue:
        x, y, dist = queue.pop(0)
        
        if x == len_x-1 and y == len_y-1: return dist
    
        for xx, yy in next_:
            next_x = x + xx
            next_y = y + yy
            
            if next_x >= 0 and next_y >= 0 and next_x < len_x and next_y < len_y:
                if maps[next_x][next_y] == 1:
                    maps[next_x][next_y] = 0
                    queue.append([next_x, next_y, dist+1])
    
    return -1