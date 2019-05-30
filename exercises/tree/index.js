// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node (data))
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        fn(this.root);
        let remaining = this.root.children;
        while (remaining.length) {
            fn(remaining[0]);
            remaining.push(...remaining[0].children);
            remaining = remaining.slice(1);
        }

    }

    traverseDF(fn) {
        let remaining = [this.root];

        while (remaining.length) {
            let node = remaining[0];
            fn(node);
            remaining.shift();
            remaining.unshift(...node.children);
        }
    }
}

module.exports = { Tree, Node };
