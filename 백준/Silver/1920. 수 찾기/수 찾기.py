import sys
from collections import Counter

input = sys.stdin.readline

n, n_num, m, m_sum = [input() for _ in range(4)]

obj = Counter(n_num.split())

for k in m_sum.split():
  print(1 if k in obj else 0)
