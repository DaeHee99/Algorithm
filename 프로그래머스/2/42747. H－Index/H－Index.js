function solution(citations) {
    const n = citations.length;
    const sort_citations = citations.sort((a, b) => b - a);
    
    for (let i = 0; i < n; i++) {
        if (sort_citations[i] < i+1) return i;
    }
    
    return n;
}
