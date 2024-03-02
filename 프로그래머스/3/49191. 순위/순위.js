function solution(n, results) {
    const table = Array.from({length: n+1}, () => {
        return Array.from({length: n+1}, () => 0);
    });
    
    results.forEach(([win, lose]) => {
        table[win][lose] = 1;
        table[lose][win] = -1;
    });
    
    let is_update = true;
    while (is_update) {
        is_update = false;
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (table[i][j] === 0) continue;
                table[j].forEach((value, index) => {
                    if (value === table[i][j] && table[i][index] === 0) {
                        table[i][index] = value;
                        is_update = true;
                    }
                });
            }
        }
    }
    
    table.forEach(arr => {
        const count = arr.filter(v => v === 0).length;
        if (count > 2) n--;
    });
    
    return n + 1;
}
