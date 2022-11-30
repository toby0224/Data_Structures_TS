class TreeNode {
    value: number;
    left: TreeNode;
    right: TreeNode;

    constructor(data: number) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    root: TreeNode;
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

        return currentNode.value;   // most left node
    }

    max() : number {
        let currentNode = this.root;
        while(currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;   // most right node
    }

    constains(value: number) : boolean {
        let currentNode = this.root;
        while(currentNode) {
            if(value === currentNode.value) {
                return true;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left;     // move left
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;    // move right
            }
        }

        return false;
    }

    //           15
    //      3          36
    //   2    12   28      39

    // Depth first search - branch by branch

    // Root, Left, Right -> 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() : number[] {
        let dfs: number[] = [];

        const preTraverse = (rootNode: TreeNode) => {
            dfs.push(rootNode.value);           // push current center node value

            if(rootNode.left) {
                preTraverse(rootNode.left);     // keep traversing left until no more left node
            }
            if(rootNode.right) {
                preTraverse(rootNode.right);    // keep traversing right until no more left node
            }
        }

        preTraverse(this.root);
        return dfs;
    }

    // Left, Root, Right -> 2, 3, 12, 15, 28, 36, 39
    dfsInOrder() : number[] {
        let dfs: number[] = [];

        const inTraverse = (rootNode: TreeNode) => {
            if(rootNode.left) {
                inTraverse(rootNode.left);      // keep traversing left until no more left node
            }

            dfs.push(rootNode.value);           // push current center node value

            if(rootNode.right) {
                inTraverse(rootNode.right);     // keep traversing right until no more right node
            }
        }

        inTraverse(this.root);
        return dfs;
    }

    // Left, Right, Root    -> 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() : number[] {
        let dfs: number[] = [];

        const postTraverse = (rootNode: TreeNode) => {
            if(rootNode.left) {
                postTraverse(rootNode.left);    // keep traversing left until no more right node
            }

            if(rootNode.right) {
                postTraverse(rootNode.right);   // keep traversing right until no more right node
            }
            
            dfs.push(rootNode.value);           // push current center node value
        }

        postTraverse(this.root);
        return dfs;
    }

    // Breadth first seach - level by level
    // use a queue  -> 15, 3, 36, 2, 12, 28, 39
    bfs() : number[]  {
        let bfs: number[] = [];
        let queue = [];

        queue.push(this.root);

        while(queue.length) {
            let currentNode = queue.shift();
            bfs.push(currentNode.value);
            
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return bfs;
    }

}



console.clear();

const myBST = new BST(15);
myBST.insertNode(3);
myBST.insertNode(36);
myBST.insertNode(2);
myBST.insertNode(12);
myBST.insertNode(28);
myBST.insertNode(39);

//console.log(myBST.root);

console.log(myBST.bfs());








