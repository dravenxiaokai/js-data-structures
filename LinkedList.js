/**
 * Node类用来表示节点
 * @param {*} element 保存节点上的数据
 */
function Node(element) {
    this.element = element
    this.next = null;//next用来保存指向下一个节点的链接
}

/**
 * LinkedList类
 */
function LinkedList() {
    this.head = new Node('head')
    this.find = find //在列表中查找给定的值
    this.insert = insert //插入节点
    this.display = display
    this.remove = remove // 删除节点
    this.findPrevious = findPrevious
}

/**
 * 遍历链表，查找给定数据
 * @param {*} item 给定的数据
 */
function find(item) {
    var currNode = this.head
    while (currNode.element != item) {
        currNode = currNode.next//从当前节点移动到下一个节点
    }
    return currNode
}

/**
 * 找到目标节点，插入新节点
 * @param {*} newElement 新节点
 * @param {*} item 目标节点
 */
function insert(newElement, item) {
    var newNode = new Node(newElement)
    var current = this.find(item)
    newNode.next = current.next
    current.next = newNode
}

/**
 * 显示列表中的元素
 */
function display() {
    var currNode = this.head
    while (!(currNode.next == null)) {
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}

//主程序
// var cities = new LinkedList()
// cities.insert('beijing', 'head')
// cities.insert('shanghai', 'beijing')
// cities.insert('changzhou', 'shanghai')
// cities.display()
// console.log('-----------华丽的分割线-------------')

/**
 * 找到待删除节点的前驱
 * @param {*} item 待删除节点
 */
function findPrevious(item) {
    var currNode = this.head
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next
    }
    return currNode
}

/**
 * 从链表中删除节点
 * @param {*} item 待删除节点
 */
function remove(item) {
    var prevNode = this.findPrevious(item)
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next
    }
}

var cities = new LinkedList()
cities.insert('beijing', 'head')
cities.insert('shanghai', 'beijing')
cities.insert('changzhou', 'shanghai')
cities.display()
console.log('------------华丽的分割线-------------')
cities.remove('beijing')
cities.display()
