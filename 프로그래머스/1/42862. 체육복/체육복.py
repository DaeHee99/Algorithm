def solution(n, lost, reserve):
    new_lost = sorted([v for v in lost if v not in reserve])
    new_reserve = sorted([v for v in reserve if v not in lost])
    answer = n - len(new_lost)

    for target in new_lost:
        a = target - 1
        b = target + 1

        if a in new_reserve:
            new_reserve.remove(a)
            answer += 1
        elif b in new_reserve:
            new_reserve.remove(b)
            answer += 1

    return answer
