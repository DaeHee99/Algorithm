function solution(numbers) {
    const sum = numbers.reduce((a, v) => a + v, 0);
    return 45 - sum;
}
