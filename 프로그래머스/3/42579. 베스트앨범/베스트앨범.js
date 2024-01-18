function solution(genres, plays) {
    const answer = [];
    const genre_sum = {};
    const genre_song = {};
    
    genres.forEach((genre, index) => {
        genre_sum[genre] = (genre_sum[genre] || 0) + plays[index];
        genre_song[genre] = [
            ...(genre_song[genre] || []),
            {id: index, play: plays[index]}
        ];
    });
    
    const genre_sum_sort = Object.entries(genre_sum).sort((a, b) => b[1] - a[1]);
    
    genre_sum_sort.forEach(item => {
        const two_song = genre_song[item[0]].sort((a, b) => {
            return b.play - a.play;
        }).map(song => song.id).slice(0, 2);
        
        answer.push(...two_song);
    })
    
    return answer;
}
