from collections import defaultdict

def solution(genres, plays):
    answer = []
    genre_sum = defaultdict(int)
    genre_song = defaultdict(list)
    
    for index, genre in enumerate(genres):
        genre_sum[genre] += plays[index]
        genre_song[genre].append({"id": index, "play": plays[index]})
        
    genre_sum_sort = sorted(genre_sum.items(), key=lambda x: x[1], reverse=True)
    
    for item in genre_sum_sort:
        two_song = sorted(genre_song[item[0]], key=lambda x: x["play"], reverse=True)[:2]
        answer.extend([song["id"] for song in two_song])
    
    return answer
