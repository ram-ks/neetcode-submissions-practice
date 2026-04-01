class Node {
    constructor(val, node = null) {
        this.val = val;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i = 0;
        let current = this.head.next;
        while (current) {
            if (i === index) {
                return current.val;
            }
            current = current.next;
            i++;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const current = new Node(val);
        current.next = this.head.next;
        this.head.next = current;
        if (this.tail.next !== null) {
            this.tail = current;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        newNode.next = this.tail.next;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let current = this.head.next;
        let prev = this.head;
        while (current) {
            if (index === i) {
                prev.next = current.next;
                if (prev.next === null) {
                    this.tail = prev;
                }
                return true;
            }
            prev = current;
            current = current.next;
            i++;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const arr = [];
        let current = this.head.next;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}
