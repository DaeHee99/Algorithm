def solution(skill, skill_trees):
    answer = 0
    skill_list = list(skill)
    
    for item in skill_trees:
        clean = [char for char in item if char in skill_list]
        if skill.startswith(''.join(clean)):
            answer += 1

    return answer
