class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.capacity === this.size) {
            this.resize();
        }
        this.arr[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.size > 0) {
            this.size--;            
        }
        return this.arr[this.size];
    }

    /**
     * @returns {void}
     */
    resize() {
        const oldArr = this.arr;
        this.capacity = this.capacity * 2;
        const newArr = new Array(this.capacity);

        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = oldArr[i];
        }

        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
