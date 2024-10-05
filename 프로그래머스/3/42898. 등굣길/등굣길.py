def solution(m, n, puddles):
    dp = [[0] * (n+1) for _ in range(m+1)]
    
    for x, y in puddles:
        dp[x][y] = -1
    
    dp[1][1] = 1
    
    for i in range(1, m+1):
        for j in range(1, n+1):
            if dp[i][j] == -1:
                continue
            dp[i][j] += max(dp[i-1][j], 0) + max(dp[i][j-1], 0)
            dp[i][j] %= 1000000007
    
    return dp[m][n]
