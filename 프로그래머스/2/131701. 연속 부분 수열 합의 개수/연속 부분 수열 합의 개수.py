def solution(elements):
    s = set()
    n = len(elements)

    for length in range(1, n + 1):
        current_sum = sum(elements[:length])
        s.add(current_sum)

        for i in range(1, n):
            current_sum += elements[(i + length - 1) % n]
            current_sum -= elements[(i - 1) % n]
            s.add(current_sum)

    return len(s)
