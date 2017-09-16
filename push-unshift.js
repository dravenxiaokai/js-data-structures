// var nums = [1, 2, 3, 4, 5]
// console.log(nums)   // [ 1, 2, 3, 4, 5 ]
// nums.push(6)
// console.log(nums)   // [ 1, 2, 3, 4, 5, 6 ]

var nums = [2, 3, 4, 5]
console.log(nums)   // [ 2, 3, 4, 5 ]

var newnum = 1
nums.unshift(newnum)
console.log(nums)   // [ 1, 2, 3, 4, 5 ]

nums = [3, 4, 5]
nums.unshift(newnum, 2)
console.log(nums)   // [ 1, 2, 3, 4, 5 ]