function solution(routes) {
    routes.sort((a, b) => {
        return (a[1] === b[1]) ? (a[0] - b[0]) : (a[1] - b[1]);
    });
    
    let answer = 1;
    let last_camera = routes[0][1];
    
    routes.forEach(([a, b]) => {
        if (a > last_camera) {
            last_camera = b;
            answer++;
        }
    });
    
    return answer;
}
