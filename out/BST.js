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
        return currentNode.value;
    };
    BST.prototype.mac = function () {
        var currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    };
    BST.prototype.constains = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
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
    };
    return BST;
}());
var myBST = new BST(3);
myBST.insertNode(2);
myBST.insertNode(1);
myBST.insertNode(4);
myBST.insertNode(5);
console.log(myBST.min());
console.log(myBST.constains(6));
//# sourceMappingURL=BST.js.map