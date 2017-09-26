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
