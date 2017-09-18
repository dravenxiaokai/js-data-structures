// var list1 = ['大明', '超哥', '小凯', '学霸', '小黄']
// var list2 = ['小戴', '海涛']
// var itList = list1.concat(list2)
// console.log(itList) // [ '大明', '超哥', '小凯', '学霸', '小黄', '小戴', '海涛' ]
// itList = list2.concat(list1)
// console.log(itList) // [ '小戴', '海涛', '大明', '超哥', '小凯', '学霸', '小黄' ]


var itList = ['大明', '超哥', '小凯', '学霸', '小黄', '小胡', '马头']
var dmpList = itList.splice(3, 3)
var cisList = itList
console.log(dmpList)    // [ '学霸', '小黄', '小胡' ]
console.log(cisList)    // [ '大明', '超哥', '小凯', '马头' ]