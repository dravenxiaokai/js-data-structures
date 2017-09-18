function square(num) {
  console.log(num, num * num)
}
var nums = [1, 2, 3, 4, 5]
nums.forEach(square)
/**
 * 输出结果
 * 1 1
   2 4
   3 9
   4 16
   5 25
 */
function isEven(num) {
  return num % 2 == 0
}
var nums = [2, 4, 6, 8, 10]
var even = nums.every(isEven)
if (even) {
  console.log('all numbers are even')
} else {
  console.log('not all numbers are even')
}
// all numbers are even