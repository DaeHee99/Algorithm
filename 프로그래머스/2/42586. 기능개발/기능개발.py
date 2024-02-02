def solution(progresses, speeds):
    answer = []
    _count = 0
    _max = 0
    
    for progress, speed in zip(progresses, speeds):
        _day = -(-(100 - progress) // speed)
        
        if _day <= _max: _count += 1
        else:
            _max = _day
            if _count > 0: answer.append(_count)
            _count = 1
    
    return answer + [_count]