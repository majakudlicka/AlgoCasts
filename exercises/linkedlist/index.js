// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
class Node {
    constructor(data, next = 0) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    getFirst() {
        return this.head;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head === null) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;
        else if (!this.head.next) {
            this.head = null;
            return;
        }
        let node = this.head.next;
        let previous= this.head;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next =null;
    }

    getAt(index) {
        if (!this.head) return null;
        if (index === 0) return this.head;
        let node = this.head;
        let counter = 0;
        if (!this.head.next) return null;
        while (counter < index) {
            if (!node.next) return null;
            node = node.next;
            counter++;
        }
        return node;
    }

    removeAt(index) {
        if (!this.head) return null;
        if (index === 0) {
         this.head = this.head.next
         }
        const previous = this.getAt(index -1);
        if (previous && previous.next) {
            previous.next = previous.next.next;
        }
    }

    insertAt(data,index) {
        if (!this.head)  {
           return this.insertFirst(data);
        }
        const node = new Node(data);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        const previous = this.getAt(index - 1);
        if (previous) {
            node.next = previous.next;
            previous.next = node;
        } else {
            this.insertLast(data);
        }
    }

    insertLast(data) {
        const node = new Node(data);
        const lastNode = this.getLast();
        if (lastNode) lastNode.next = node;
        else {
            this.head = node;
        }
    }

    getLast() {
        if (!this.head) return null;
        if (!this.head.next) return this.head;
        let node = this.head;
        while  (node.next) {
            node = node.next;
        }
        return node;
    }

    size() {
        if(!this.head) return 0;
        let node = this.head;
        let counter = 1;
        while (node.next) {
            counter++;
            node = node.next;
        }

        return counter;
    }

}

module.exports = { Node, LinkedList };
