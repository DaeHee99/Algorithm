function solution(sizes) {
    let max_width = 0;
    let max_height = 0;
    
    sizes.forEach(size => {
        size.sort((a, b) => a - b);
        
        if (max_width < size[0]) max_width = size[0];
        if (max_height < size[1]) max_height = size[1];
    });
    
    return max_width * max_height;
}