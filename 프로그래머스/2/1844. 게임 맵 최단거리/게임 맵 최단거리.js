function solution(maps) {
    const len_x = maps.length;
    const len_y = maps[0].length;
    const next = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const queue = [[0, 0, 1]];
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (x === len_x-1 && y === len_y-1) return dist;
        
        next.forEach(([xx, yy]) => {
            const next_x = x + xx;
            const next_y = y + yy;
            
            if (next_x >= 0 && next_y >=0 && next_x < len_x && next_y < len_y) {
                if (maps[next_x][next_y] === 1) {
                    maps[next_x][next_y] = 0;
                    queue.push([next_x, next_y, dist+1]);
                }
            }
        });
    }
    
    return -1;
}