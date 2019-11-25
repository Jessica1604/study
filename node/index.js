// console.log(123);
// console.log('hello world!')
// console.log('hello node')

// const os = require('os')
// const men = os.freemem() / os.totalmem() *100
// console.log(`内存占用率${men.toFixed()}%`)

const download = require('download-git-repo')
const ora = require('ora')
const process = ora('下载......项目')
process.start()
download('github:su37josephxia/vue-template', 'test', err=> {
    // console.log(err ? 'error' : 'success')
    if (err){
        process.fail()
    } else {
        process.succeed()

    }
})

