class Heap {
    constructor() {
        this.heap = [null];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    getAnswer() {
        if (this.size() === 0) return [0, 0];
        else return [Math.max(...this.heap.slice(1)), this.heap[1]];
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
    
    popMax() {
        const maxIdx = this.heap.indexOf(Math.max(...this.heap));
        this.heap.splice(maxIdx, 1);
        const arr = this.heap.slice(1);
        this.heap = [null];
        arr.forEach(val => this.push(val));
    }
    
    popMin() {
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

function solution(operations) {
    const heap = new Heap();
    
    operations.forEach(operation => {
        const [command, s_num] = operation.split(" ");
        const num = Number(s_num);
        
        if (command === "I") heap.push(num);
        else if (heap.size() > 0) {
            if (num === -1) heap.popMin();
            else heap.popMax();
        }
    });
    
    return heap.getAnswer();
}
