var nums = [1, 2, 3, 4, 5]
nums.reverse()
console.log(nums)   // [ 5, 4, 3, 2, 1 ]

var names = ['David', 'Mike', 'Cindy', 'Bryan', 'Raymond']
names.sort()
console.log(names)  // [ 'Bryan', 'Cindy', 'David', 'Mike', 'Raymond' ]

var nums = [3, 1, 2, 100, 4, 200]
nums.sort()
console.log(nums)   // [ 1, 100, 2, 200, 3, 4 ]

function compare(num1, num2) {
    return num1 - num2
}
var nums = [3, 1, 2, 100, 4, 200]
nums.sort(compare)
console.log(nums)   // [ 1, 2, 3, 4, 100, 200 ]