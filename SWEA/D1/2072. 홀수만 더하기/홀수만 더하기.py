T = int(input())

for i in range(1, T+1):
    nums = list(map(int, input().split()))
    nums = [num for num in nums if num % 2 == 1]
    print(f"#{i} {sum(nums)}")
