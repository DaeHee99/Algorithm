function solution(x) {
    const hap = x.toString().split('').reduce((acc, val) => acc + Number(val), 0);
    return x % hap === 0;
}
