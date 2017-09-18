var names = []
names.push('dravenxiaokai')
names.push('惜墨的少年')
console.log(names)  // [ 'dravenxiaokai', '惜墨的少年' ]

names.shift()
console.log(names)  // [ '惜墨的少年' ]

function Queue() {
    this.dataStore = []
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

//队尾添加一个元素
function enqueue(element) {
    this.dataStore.push(element)
}

// 删除队首元素
function dequeue() {
    return this.dataStore.shift()
}

//读取队首元素
function front() {
    return this.dataStore[0]
}

//读取队尾元素
function back() {
    return this.dataStore[this.dataStore.length - 1]
}

//显示队列内所有元素
function toString() {
    var retStr = ''
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i] + '\n'
    }
    return retStr
}

//判断队列是否为空
function empty() {
    if (this.dataStore.length == 0) {
        return true
    }
    return false
}

// 测试
var q = new Queue()
q.enqueue('draven')
q.enqueue('xiaokai')
q.enqueue('dravenxiaokai')
console.log(q.toString())
q.dequeue()
console.log(q.toString())
console.log('Front of queue: ' + q.front())
console.log('Back of queue: ' + q.back())

/**
 * 根据相应位上的数值，将数字分配到相应队列
 * @param {*} nums 待排序的数组
 * @param {*} queues 队列数组
 * @param {*} n 数组的长度
 * @param {*} digit 参数digit表示个位或十位上的值
 */
function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; i++) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i])
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
        }
    }
}

/**
 * 从队列中收集数字
 * @param {*} queues 队列数组
 * @param {*} nums 数组
 */
function collect(queues, nums) {
    var i = 0
    for (var digit = 0; digit < 10; digit++) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue()
        }
    }
}

/**
 * 显示数组
 * @param {*} arr 需要打印的数组
 */
function dispArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + ' ')
    }
}

//主程序
var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue()
}
var nums = []
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101))
}
console.log('Before radix sort: ')
dispArray(nums)
distribute(nums, queues, 10, 1)
collect(queues, nums)
distribute(nums, queues, 10, 10)
collect(queues, nums)
console.log('\nAfter radix sort: ')
dispArray(nums)