function solution(phone_book) {
    phone_book.sort();
    
    const answer = phone_book.some((item, index, arr) => {
        return item === arr[index+1]?.slice(0, item.length);
    })
    
    return !answer;
}