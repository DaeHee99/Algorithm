function solution(m, n, puddles) {
    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    puddles.forEach(([x, y]) => dp[x][y] = -1);
    
    dp[1][1] = 1;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (dp[i][j] === -1) continue;
            dp[i][j] += Math.max(dp[i-1][j], 0) + Math.max(dp[i][j-1], 0);
            dp[i][j] %= 1000000007;
        }
    }
    
    return Math.max(dp[m][n], 0);
}
