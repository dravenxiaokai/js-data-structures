// var nums = [1, 2, 3, 5, 9]
// nums.pop()
// console.log(nums)   // [ 1, 2, 3, 5 ]

// var nums = [9, 6, 4, 3, 2]
// nums.shift()
// console.log(nums)   //  [ 6, 4, 3, 2 ]

var nums = [6, 1, 2, 3, 4, 5]
var first = nums.shift()
nums.push(first)
console.log(nums) // [ 1, 2, 3, 4, 5, 6 ]