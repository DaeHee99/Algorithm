function solution(brown, yellow) {
    for (let yellow_height = 1; yellow_height <= Math.sqrt(yellow); yellow_height++) {
        if (yellow % yellow_height !== 0) continue;
        
        const yellow_width = yellow / yellow_height;
        
        if (2 * (yellow_width + yellow_height) + 4 === brown) {
            return [yellow_width + 2, yellow_height + 2];
        }
    }
}
