from collections import Counter

def solution(participant, completion):
    participant_dict = Counter(participant)
    completion_dict = Counter(completion)
    
    for key, value in participant_dict.items():
        if value != completion_dict[key]:
            return key
