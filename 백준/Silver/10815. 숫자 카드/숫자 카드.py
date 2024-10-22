N = input()
cards = list(input().split())
M = input()
nums = list(input().split())

objs = {}

for num in cards:
  objs[num] = True

answer = ["1" if objs.get(num, False) else "0" for num in nums]

print(" ".join(answer))