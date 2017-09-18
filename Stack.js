function Stack() {
    this.dataStore = [];//保存栈内元素
    this.top = 0;//栈顶位置
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element
}

function pop() {
    return this.dataStore[--this.top]
}

function peek() {
    return this.dataStore[this.top - 1]
}

function length() {
    return this.top
}

function clear() {
    this.top = 0
}

var s = new Stack()
s.push('dravenxiaokai')
s.push('超哥')
s.push('大明')
console.log('length: ', s.length())
console.log(s.peek())
var popped = s.pop()
console.log('the popped element is: ', popped)
console.log(s.peek())
s.push('学霸')
console.log(s.peek())
s.clear()
console.log('length: ', s.length())
console.log(s.peek())
s.push('凯伦')
console.log(s.peek())

/**
 * 将数字转换为其他进制数
 */
function mulBase(num, base) {
    var s = new Stack()
    do {
        s.push(num % base)
        num = Math.floor(num /= base)
    } while (num > 0)
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop()
    }
    return converted
}

//转换为二进制和八进制数 
var num = 32;
var base = 2;
var newNum = mulBase(num, base)
console.log(num + ' 转换为 ' + base + ' 进制为 ' + newNum)
num = 125;
base = 8;
var newNum = mulBase(num, base)
console.log(num + ' 转换为 ' + base + ' 进制为 ' + newNum)

/**
 * 判断给定字符串是否是回文
 */
function isPalindrome(word) {
    var s = new Stack()
    for (var i = 0; i < word.length; i++) {
        s.push(word[i])
    }
    var rword = ''
    while (s.length() > 0) {
        rword += s.pop()
    }
    if (word == rword) {
        return true
    }
    return false
}

var word = 'hello'
if (isPalindrome(word)) {
    console.log(word + ' is a palindrome.')
} else {
    console.log(word + ' is not a palindrome.')
}
word = 'racecar'
if (isPalindrome(word)) {
    console.log(word + ' is a palindrome.')
} else {
    console.log(word + ' is not a palindrome.')
}

function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

function fact(n) {
    var s = new Stack()
    while (n > 1) {
        s.push(n--)
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop()
    }
    return product
}

console.log(factorial(5))   // 120
console.log(fact(5))    // 120