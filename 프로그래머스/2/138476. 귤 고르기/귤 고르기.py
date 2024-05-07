from collections import Counter

def solution(k, tangerine):
    count = 0
    counter = Counter(tangerine)
    
    for i, (_, n) in enumerate(counter.most_common()):
        count += n
        if count >= k:
            return i + 1
    
    return len(counter)
