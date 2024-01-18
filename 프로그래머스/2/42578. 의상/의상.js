function solution(clothes) {
    let answer = 1;
    const map = new Map();
    
    clothes.forEach(item => {
        map.set(item[1], (map.get(item[1]) || 1) + 1);
    })
    
    for (const [_, value] of map) {
        answer *= value;
    }
    
    return answer - 1;
}
