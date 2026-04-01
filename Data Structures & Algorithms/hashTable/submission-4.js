class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(capacity).fill(null);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let index = this.getIndex(key);
        while (true) {
            if (this.arr[index] === null) {
                // add new value
                this.arr[index] = {key: key, value: value};
                this.size = this.size + 1; // array becomes half
                let shouldResize = this.size / this.capacity;
                if (shouldResize >= 0.5) {
                    // resize the array
                    this.resize();
                }
                return;
            } else if (this.arr[index].key === key) {
                this.arr[index] = {key: key, value: value};
                return;
            }
            index++;
            index = index % this.capacity;
        }        
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let index = this.getIndex(key);
        while (this.arr[index]) {
            if (this.arr[index].key === key) {
                return this.arr[index].value;
            }
            index++;
            index = index % this.capacity;
        }
        return -1;
    }

    // key being int here
    getIndex(key) {
        return key % this.capacity;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let index = this.getIndex(key);
        while (this.arr[index]) {
            if (this.arr[index].key === key) {
                delete this.arr[index];
                this.size--;
                return true;
            }
            index++;
            index = index % this.capacity;
        }
        return false;
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

    /**
     * @return {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
        const oldArr = this.arr;

        this.size = 0;
        this.arr = new Array(this.capacity).fill(null);

        for (let i = 0; i < oldArr.length; i++) {
            if (oldArr[i]) {
                const key = oldArr[i].key;
                const value = oldArr[i].value;
                this.insert(key, value);
            }
        }
    }
}
