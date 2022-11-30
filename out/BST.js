var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST(value) {
        this.size = 0;
        this.root = new TreeNode(value);
        this.size++;
    }
    BST.prototype.insertNode = function (value) {
        this.size++;
        var newNode = new TreeNode(value);
        var searchTree = function (node) {
            if (newNode.value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    searchTree(node.left);
                }
            }
            else if (newNode.value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    searchTree(node.right);
                }
            }
        };
        searchTree(this.root);
    };
    BST.prototype.min = function () {
        var currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value; // most left node
    };
    BST.prototype.max = function () {
        var currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value; // most right node
    };
    BST.prototype.constains = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left; // move left
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right; // move right
            }
        }
        return false;
    };
    //           15
    //      3          36
    //   2    12   28      39
    // Depth first search - branch by branch
    // Root, Left, Right -> 15, 3, 2, 12, 36, 28, 39
    BST.prototype.dfsPreOrder = function () {
        var dfs = [];
        var preTraverse = function (rootNode) {
            dfs.push(rootNode.value); // push current center node value
            if (rootNode.left) {
                preTraverse(rootNode.left); // keep traversing left until no more left node
            }
            if (rootNode.right) {
                preTraverse(rootNode.right); // keep traversing right until no more left node
            }
        };
        preTraverse(this.root);
        return dfs;
    };
    // Left, Root, Right -> 2, 3, 12, 15, 28, 36, 39
    BST.prototype.dfsInOrder = function () {
        var dfs = [];
        var inTraverse = function (rootNode) {
            if (rootNode.left) {
                inTraverse(rootNode.left); // keep traversing left until no more left node
            }
            dfs.push(rootNode.value); // push current center node value
            if (rootNode.right) {
                inTraverse(rootNode.right); // keep traversing right until no more right node
            }
        };
        inTraverse(this.root);
        return dfs;
    };
    // Left, Right, Root    -> 2, 12, 3, 28, 39, 36, 15
    BST.prototype.dfsPostOrder = function () {
        var dfs = [];
        var postTraverse = function (rootNode) {
            if (rootNode.left) {
                postTraverse(rootNode.left); // keep traversing left until no more right node
            }
            if (rootNode.right) {
                postTraverse(rootNode.right); // keep traversing right until no more right node
            }
            dfs.push(rootNode.value); // push current center node value
        };
        postTraverse(this.root);
        return dfs;
    };
    // Breadth first seach - level by level
    // use a queue  -> 15, 3, 36, 2, 12, 28, 39
    BST.prototype.bfs = function () {
        var bfs = [];
        var queue = [];
        queue.push(this.root);
        while (queue.length) {
            var currentNode = queue.shift();
            bfs.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return bfs;
    };
    return BST;
}());
console.clear();
var myBST = new BST(15);
myBST.insertNode(3);
myBST.insertNode(36);
myBST.insertNode(2);
myBST.insertNode(12);
myBST.insertNode(28);
myBST.insertNode(39);
//console.log(myBST.root);
console.log(myBST.bfs());
//# sourceMappingURL=BST.js.map