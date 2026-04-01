class MinStack {
    constructor() {
        this.list = new Array();
        this.extraStack = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.list.push(val);
        let lastOfExtra = this.extraStack.length ? this.extraStack[this.extraStack.length - 1] : val;
        this.extraStack.push(Math.min(val, lastOfExtra));
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.list.length) {
            this.list.pop();
            this.extraStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.list.length) {
            return this.list[this.list.length - 1];
        }
        return 0;
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.extraStack.length) {
            return this.extraStack[this.extraStack.length - 1];
        }
    }
}

