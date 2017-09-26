/**
 * 节点类
 * @param {*} key 键/节点
 */
function Node(key) {
    this.key = key //键
    this.left = null//左子节点
    this.right = null//右子节点
}
/**
 * BinarySearchTree 类
 */
function BinarySearchTree() {
    var root = null//根节点

    this.insert = insert//插入节点
    this.inOrderTraverse = inOrderTraverse//中序遍历
    this.preOrderTraverse = preOrderTraverse//先序遍历
    this.postOrderTraverse = postOrderTraverse//后序遍历
    this.min = min//树的最小键
    this.max = max//树的最大键
    this.search = search//搜索树中特定值
    this.remove = remove//移除一个节点

    /**
     * 插入键的方法
     * @param {*} key 节点
     */
    function insert(key) {
        var newNode = new Node(key)

        if (root === null) {
            root = newNode//插入新键
        } else {
            insertNode(root, newNode)//插入非根节点的其他位置
        }
    }
    /**
     * 非根节点插入节点辅助函数
     * @param {*} node 节点
     * @param {*} newNode 待插入的节点
     */
    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {//没有左子节点
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {//没有右子节点
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    /**
     * 中序遍历二叉搜索树
     * @param {*} callback 回调
     */
    function inOrderTraverse(callback) {
        inOrderTraverseNode(root, callback)//接受回调函数作为参数
    }

    /**
     * 中序遍历二叉搜索树辅助函数
     * @param {*} node 键
     * @param {*} callback 回调
     */
    function inOrderTraverseNode(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback)//先遍历左子节点
            callback(node.key)//再遍历父节点
            inOrderTraverseNode(node.right, callback)//后遍历右子节点
        }
    }
    /**
     * 先序遍历二叉搜索树
     * @param {*} callback 
     */
    function preOrderTraverse(callback) {
        preOrderTraverseNode(root, callback)//接受回调函数作为参数
    }
    /**
     * 先序遍历二叉搜索树辅助函数
     * @param {*} node 
     * @param {*} callback 
     */
    function preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key)//先遍历父节点
            preOrderTraverseNode(node.left, callback)//再遍历左子节点
            preOrderTraverseNode(node.right, callback)//后遍历右子节点
        }
    }
    /**
     * 后序遍历二叉搜索树
     * @param {*} callback 回调
     */
    function postOrderTraverse(callback) {
        postOrderTraverseNode(root, callback)//接受回调作为参数
    }
    /**
     * 后序遍历二叉搜索树辅助函数
     * @param {*} node 节点
     * @param {*} callback 回调
     */
    function postOrderTraverseNode(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback)//先遍历左子节点
            postOrderTraverseNode(node.right, callback)//再遍历右子节点
            callback(node.key)//后遍历父节点
        }
    }

    /**
     * 搜索树中最小值
     */
    function min() {
        return minNode(root)
    }
    /**
     * 辅助函数
     * @param {*} node 
     */
    function minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.key//只返回键
        }
        return null
    }

    /**
     * 搜索树中最大值
     */
    function max() {
        return maxNode(root)
    }
    /**
     * 辅助函数
     * @param {*} node 
     */
    function maxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    /**
     * 声明 search 方法
     * @param {*} key 
     */
    function search(key) {
        return searchNode(root, key)
    }
    /**
     * 寻找一棵树或它的字数中的一个特定值
     * @param {*} node 
     * @param {*} key 
     */
    function searchNode(node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }
    /**
     * 移除一个节点
     * @param {*} key 
     */
    function remove(key) {
        root = removeNode(root, key)
    }
    /**
     * 递归实现移除节点
     * @param {*} node 返回节点
     * @param {*} key 
     */
    function removeNode(node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {//键等于 node.key
            //一个叶节点
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            //一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            //一个有两个子节点的节点
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }
}
/**
 * 在子树中查找节点，最终返回节点
 * @param {*} node 
 */
function findMinNode(node) {
    if (node) {
        while (node && node.left !== null) {
            node = node.left
        }
        return node//返回节点
    }
    return null
}
/**
 * 打印节点
 * @param {*} value 节点
 */
function printNode(value) {
    console.log(value)
}

var tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(13)
tree.insert(20)
tree.insert(6)
console.log('中序遍历结果： ')
tree.inOrderTraverse(printNode)
console.log('先序遍历结果： ')
tree.preOrderTraverse(printNode)
console.log('后序遍历结果： ')
tree.postOrderTraverse(printNode)
console.log('--------------------')
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found. ')
console.log(tree.search(15) ? 'Key 15 found.' : 'Key 15 not found. ')
console.log('树中最小值：', tree.min())
tree.remove(15)
console.log('移除 15 节点后：')
tree.inOrderTraverse(printNode)