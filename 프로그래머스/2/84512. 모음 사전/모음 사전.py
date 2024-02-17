def solution(word):
    answer = 0
    
    def find_word(string):
        nonlocal answer
        
        if string == word: return True
        if len(string) == 5: return False
        
        for char in ['A', 'E', 'I', 'O', 'U']:
            answer += 1
            if find_word(string + char): return True
    
    find_word("")
    
    return answer
