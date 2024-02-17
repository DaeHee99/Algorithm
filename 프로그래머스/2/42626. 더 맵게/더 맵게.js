class Heap {
    constructor() {
        this.heap = [null];
    }
    
    heapify(arr) {
        arr.forEach(item => this.push(item));
    }
    
    getMin() {
        return this.heap[1];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;
        
        while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            this.swap(parIdx, curIdx);
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }
    
    pop() {
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();
        
        let curIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        if (!this.heap[leftIdx]) return min;
        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }
        
        while (
            this.heap[leftIdx] < this.heap[curIdx] || 
            this.heap[rightIdx] < this.heap[curIdx]
        ) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        
        return min;
    }
}

function solution(scoville, K) {
    let answer = 0;
    const heap = new Heap();
    heap.heapify(scoville);
    
    while (heap.getMin() < K) {
        if (heap.size() < 2) return -1;
        answer++;
        const a = heap.pop();
        const b = heap.pop();
        heap.push(a + b * 2);
    }
    
    return answer;
}
