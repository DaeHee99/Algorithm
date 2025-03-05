def check(s):
    stack = ['', s[0]]
    
    for c in s[1:]:
        h = stack[-1]
        if h == '(' and c == ')': stack.pop()
        elif h == '[' and c == ']': stack.pop()
        elif h == '{' and c == '}': stack.pop()
        else: stack.append(c)
    
    return len(stack) == 1

def solution(s):
    answer = 0
    n = len(s)
    
    for i in range(n):
        new_string = s[i:] + s[:i]
        if check(new_string):
            answer += 1
            
    return answer
