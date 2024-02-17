from itertools import permutations

def solution(k, dungeons):
    answer = 0
    
    for game in permutations(dungeons, len(dungeons)):
        game_k = k
        count = 0
        
        for need, used in game:
            if need <= game_k:
                game_k -= used
                count += 1
        
        if answer < count: answer = count
    
    return answer
