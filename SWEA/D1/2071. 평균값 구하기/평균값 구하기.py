T = int(input())

for i in range(1, T+1):
    nums = list(map(int, input().split()))
    print(f"#{i} {round(sum(nums) / 10)}")
