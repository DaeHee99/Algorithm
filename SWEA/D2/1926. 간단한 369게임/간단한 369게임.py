N = int(input())
answer = []

for num in range(1, N+1):
    digit = num
    count = 0
    while digit > 0:
        if digit % 10 in (3, 6, 9):
            count += 1
        digit //= 10
    if count == 0:
        answer.append(num)
    else:
        answer.append('-' * count)

print(*answer)
