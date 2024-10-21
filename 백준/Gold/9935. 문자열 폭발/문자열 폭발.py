s = input().strip()
sub = input().strip()

q = []

for char in s:
    q.append(char)

    if len(q) >= len(sub):
        if q[-len(sub):] == list(sub):
            del q[-len(sub):]

print("".join(q) or "FRULA")