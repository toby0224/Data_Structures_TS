class TreeNode {
    value: number;
    left: TreeNode;
    right: TreeNode | null;

    constructor(data: number) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}


class BST {
    root: TreeNode | null;
    size: number = 0;

    constructor(value: number){
        this.root = new TreeNode(value);
        this.size++;
    }

    insertNode(value: number) {
        this.size++;
        let newNode = new TreeNode(value);

        const searchTree = (node: TreeNode) => {
            if(newNode.value < node.value) {
                if(!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left);
                }
            } 
            else if (newNode.value > node.value) {
                if(!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right);
                }
            } 
        }

        searchTree(this.root);
    }

    min() : number {
        let currentNode = this.root;
        while(currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    mac() : number {
        let currentNode = this.root;
        while(currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    constains(value: number) : boolean {
        let currentNode = this.root;
        while(currentNode) {
            if(value === currentNode.value) {
                return true;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }

        return false;
    }

}

const myBST = new BST(3);
myBST.insertNode(2);
myBST.insertNode(1);
myBST.insertNode(4);
myBST.insertNode(5);





