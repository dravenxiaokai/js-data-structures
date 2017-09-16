/**
 * 查找元素
 */
var names = ['David', 'Joe', 'Mike', 'Lucy']
// console.log('enter a name to search for: ')
// var name = readline()
var name = 'Mike'
var position = names.indexOf(name)
if (position >= 0) {
    console.log('found ' + name + 'at position ' + position)
} else {
    console.log(name + ' not found in array.')
}