def solution(n, results):
    table = [[0 for _ in range(n+1)] for __ in range(n+1)]
    
    for win, lose in results:
        table[win][lose] = 1
        table[lose][win] = -1
    
    is_update = True
    
    while is_update:
        is_update = False
        for i in range(1, n+1):
            for j in range(1, n+1):
                if table[i][j] == 0: continue
                for index, value in enumerate(table[j]):
                    if value == table[i][j] and table[i][index] == 0:
                        table[i][index] = value
                        is_update = True
                        
    for arr in table:
        if arr.count(0) > 2:
            n -= 1
    
    return n + 1
