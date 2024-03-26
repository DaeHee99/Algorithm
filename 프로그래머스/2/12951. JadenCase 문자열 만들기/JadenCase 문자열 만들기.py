def solution(s):
    ss = [_str[0].upper() + _str[1:].lower() if _str else _str for _str in s.split(" ")]
    
    return " ".join(ss)