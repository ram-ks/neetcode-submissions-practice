class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.LRU = new Node(-1, -1);
        this.MRU = new Node(-1, -1);
        this.LRU.next = this.MRU;
        this.MRU.prev = this.LRU;
        this.obj = {};
    }

    remove(node) {
        let next = node.next;
        let prev = node.prev;
        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        let prev = this.MRU.prev;
        let right = this.MRU;
        node.prev = prev;
        node.next = right;
        prev.next = node;
        right.prev = node;
        this.obj[node.key] = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.obj[key]) {
            this.remove(this.obj[key]);
            this.insert(this.obj[key]);
            return this.obj[key].val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const node = new Node(key, value);
        if (this.obj[key]) {
            this.remove(this.obj[key]);
        }
        this.insert(node);

        let len = Object.keys(this.obj).length;
        if (len > this.capacity) {
            let lru = this.LRU.next;
            this.remove(lru);
            delete this.obj[lru.key];
        }

        Object.values(this.obj).forEach((node) => {
            console.log("val: ", node.val, node.key)
        });
    }
}
