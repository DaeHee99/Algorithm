function solution(n) {
    return String(n).split('').reduce((acc, val) => acc += Number(val), 0);
}
