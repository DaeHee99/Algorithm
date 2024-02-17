function solution(k, dungeons) {
    let answer = 0;
    const dungeons_dfs = [];
    
    const dfs = (arr, visited=[]) => {
        if (visited.length === dungeons.length) {
            dungeons_dfs.push([...visited]);
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                visited.push(arr[i]);
                dfs(arr.filter((_, index) => index !== i), visited);
                visited.pop();
            }
        }
    };
    
    dfs(dungeons);
    
    dungeons_dfs.forEach(game => {
        let game_k = k;
        let count = 0;
        
        game.forEach(([need, used]) => {
            if (need <= game_k) {
                game_k -= used;
                count++;
            }
        });
        
        if (answer < count) answer = count;
    });
    
    return answer;
}