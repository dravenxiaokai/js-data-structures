/**
 *List类
listSize（属性）  列表的元素个数
pos（属性）  列表的当前位置
length（属性）  返回列表中元素的个数
clear（方法）  清空列表中所有的元素
toString（方法  返回列表的字符串形式）
getElement（方法）  返回当前位置的元素
insert（方法）  在现有元素后插入新元素
append（在列表末尾添加新元素）
remove（方法）  从列表中删除元素
front（方法）  将列表的当前位置移动到第一个元素
end（方法）  将列表的当前位置移动到最后一个元素
prev（方法）  将当前位置后移一位
next（方法）  将当前位置前移一位
hasNext（方法）  判断后一位
hasPrev（方法）  判断前一位
currPos（方法）  返回列表的当前位置
moveTo（方法）  将当前位置移动到指定位置
 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; //舒适化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

//给列表添加元素
function append(element) {
    this.dataStore[this.listSize++] = element;//当新元素就为后，变量listSize加1
}

//从列表中查找某一元素
function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

//从列表中删除某一元素
function remove(element) {
    var foundAt = this.find(element)
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1)
        this.listSize--;
        return true
    }
    return false
}

//列表中有多少元素
function length() {
    return this.listSize
}

//显示列表中的元素
function toString() {
    return this.dataStore
}

//向列表中插入一个元素
function insert(element, after) {
    var insertPos = this.find(after)
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element)
        this.listSize++;
        return true
    }
    return false
}

//清空列表中所有的元素
function clear() {
    delete this.dataStore
    this.dataStore.length = 0
    this.listSize = this.pos = 0
}

//判断给定值是否在列表中
function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true
        }
    }
    return false
}

/**
 * 遍历列表
 */
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    this.pos--;
}
function next() {
    if (this.pos < this.listSize) {
        this.pos++
    }
}
function currPos() {
    return this.pos
}
function moveTo(position) {
    this.pos = position
}
function getElement() {
    return this.dataStore[this.pos]
}
function hasNext() {
    return this.pos < this.listSize
}
function hasPrev() {
    return this.pos >= 0
}

//实例化一个姓名列表
var names = new List()
names.append('dravenxiaokai')
names.append('chaoge')
names.append('daming')
names.append('xueba')
names.append('matou')
names.append('kailun')
names.append('xiaohu')

//移动到列表中第一个元素并显示它
names.front()
console.log(names.getElement())// 显示 dravenxiaokai

//向前移动一个单位并显示
names.next()
console.log(names.getElement())//显示 chaoge

//先前移两次，再后移一次
names.next()
names.next()
names.prev()
console.log(names.getElement()) //显示 daming

//迭代器遍历列表
for (names.front(); names.hasNext(); names.next()) {
    console.log(names.getElement())
}
//迭代器遍历列表
for (names.end(); names.hasPrev(); names.prev()) {
    console.log(names.getElement())
}