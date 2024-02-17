def solution(brown, yellow):
    for yellow_height in range(1, int(yellow**0.5) + 1):
        if yellow % yellow_height != 0: continue
        
        yellow_width = yellow / yellow_height
        
        if 2 * (yellow_width + yellow_height) + 4 == brown:
            return [yellow_width + 2, yellow_height + 2]