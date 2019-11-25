// console.log('hello world!')
// console.log(global)
'use strict'
var fs = require('fs')
var data = 'hello js  wrwerwrnodfsdfsd'
fs.writeFileSync('output.txt',data)


// stat 文件目录的详细信息
fs.stat('output.txt',function(error, stat) {
    if (error){
        console.log(error)
    } else {
        // 是否是文件
        console.log('isFile' + stat.isFile())
        // 是否是目录
        console.log('isFile' + stat.isDirectory())
        if (stat.isFile()) {
            // 文件大小
            console.log('size:'+ stat.size)
            // 创建时间
            console.log('123')


        }
    }
})