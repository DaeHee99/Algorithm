from collections import Counter

N, M = map(int, input().split())

set = [input() for _ in range(N)]
s = Counter([input() for _ in range(M)])

answer = 0

for str in set:
    answer += s[str] or 0

print(answer)
