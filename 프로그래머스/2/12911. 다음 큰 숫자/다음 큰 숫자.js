function count_1(n) {
    return n.toString(2).split('0').join('').length;
}

function solution(n) {
    const target_count = count_1(n);
    let number = n + 1;

    while (count_1(number) !== target_count) {
        number++;
    }
    
    return number;
}
