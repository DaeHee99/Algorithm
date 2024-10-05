class Heap {
    constructor() {
        this.heap = [null];
    }
    
    powerSum() {
        return this.heap.reduce((acc, val) => {
            return acc + val ** 2;
        }, 0);
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    heappush(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;
        
        while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
            this.swap(parIdx, curIdx);
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }
    
    heappop() {
        const max = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();
        
        let curIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        
        if (!this.heap[leftIdx]) return max;
        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] > this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return max;
        }
        
        while (
            this.heap[leftIdx] > this.heap[curIdx] || 
            this.heap[rightIdx] > this.heap[curIdx]
        ) {
            const maxIdx = this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(maxIdx, curIdx);
            curIdx = maxIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        
        return max;
    }
}

function solution(n, works) {
    const heap = new Heap();
    
    works.forEach(num => heap.heappush(num));
    
    for (let i = 0; i < n; i++) {
        if (heap.size() === 0) return 0;
        max_work = heap.heappop();
        if (max_work > 0) {
            heap.heappush(max_work - 1);
        }
    }
    
    return heap.powerSum();
}
