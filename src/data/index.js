class minHeap {
    constructor() {
        this.heap = []
        this.array = []
        this.sorted = []
    }

    getParentIndex(currentIndex) {
        return (currentIndex - 1) >> 1
    }

    getLeftChildIndex(currentIndex) {
        return 2 * currentIndex + 1
    }

    getRightChildIndex(currentIndex) {
        return 2 * currentIndex + 2
    }

    switch(id1, id2) {
        let backup = this.heap[id1]
        this.heap[id1] = this.heap[id2]
        this.heap[id2] = backup
    }

    switchUp(currentIndex) {
        if (currentIndex === 0)
            return
        const parentIndex = this.getParentIndex(currentIndex)
        if (this.heap[parentIndex] > this.heap[currentIndex]) {
            this.switch(currentIndex, parentIndex)
            this.switchUp(parentIndex)
        }
    }

    switchDown(currentIndex) {
        const leftChildIndex = this.getLeftChildIndex(currentIndex)
        const rightChildIndex = this.getRightChildIndex(currentIndex)
        if (leftChildIndex > this.heap.length - 1)
            return
        if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
            this.switch(leftChildIndex, currentIndex)
            this.switchDown(leftChildIndex)
        }
        if (rightChildIndex > this.heap.length - 1)
            return
        if (this.heap[rightChildIndex] < this.heap[currentIndex]) {
            this.switch(rightChildIndex, currentIndex)
            this.switchDown(rightChildIndex)
        }
    }

    push(value) {
        this.heap.push(value)
        this.switchUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length > 1) {
            let backup = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.switchDown(0)

            if(this.sorted.length < this.array.length)
                this.sorted.push(backup)
        }
        else if (this.heap.length === 1) {
            let backup = this.heap[0]
            this.heap = []
            this.sorted.push(backup)
        }
        else{
            return
        }
    }

    top() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

    display() {
        let s = ''
        for(let i = 0; i < this.heap.length; i++){
            s += this.heap[i] + ' '
        }
        console.log(s)
    }

    export() {
        return this.heap
    }

    exportUnheapified() {
        if (this.array.length === 0) {
            return [-1]
        }
        return this.array
    }

    exportSorted() {
        if (this.sorted.length === 0) {
            return [-1]
        }
        return this.sorted
    }

    pushBack(value) {
        this.array.push(value)
    }
}

//a = new minHeap()
//a.push(4)
//a.display()

const heapObject = new minHeap()
export default heapObject