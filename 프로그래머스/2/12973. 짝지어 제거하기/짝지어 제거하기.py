def solution(s):
    stack = []
    
    for c in list(s):
        if stack and stack[-1] == c:
            stack.pop();
        else:
            stack.append(c)
    
    return 0 if stack else 1
