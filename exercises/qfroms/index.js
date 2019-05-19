// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(el) {
       this.stack1.push(el);
    }

    remove() {
        while (this.stack1.peek()) {
            let el = this.stack1.pop();
            this.stack2.push(el);
        }
        const elementToBeReturned = this.stack2.pop();
        while (this.stack2.peek()) {
            let el = this.stack2.pop();
            this.stack1.push(el);
        }
        return elementToBeReturned;
    }

    peek() {
        while (this.stack1.peek()) {
            let el = this.stack1.pop();
            this.stack2.push(el);
        }
        const elementToBeReturned = this.stack2.peek();
        while (this.stack2.peek()) {
            let el = this.stack2.pop();
            this.stack1.push(el);
        }
        return elementToBeReturned;
    }

}

module.exports = Queue;
