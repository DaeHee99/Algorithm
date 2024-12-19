import sys

input = sys.stdin.readline

l, s = [input() for _ in range(2)]
M = 1234567891
R = 31
answer = 0
rPower = 1

for i in range(int(l)):
  a = ord(s[i]) - ord("a") + 1
  answer = (answer + ((a * rPower) % M)) % M
  rPower = (rPower * R) % M

print(answer)
