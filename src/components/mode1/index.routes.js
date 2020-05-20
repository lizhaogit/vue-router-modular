// 第一个参数是遍历的目录，第二个参数是是否遍历这个目录下的子文件夹，第三个参数是匹配文件的正则
var r = require.context("./pages", true, /.vue/)

var arr = []

r.keys().forEach((key) => {
    var _keyarr = key.split(".")

    if (key.indexOf('index') != -1) {
        arr.push({
            path: _keyarr[1],
            component: r(key).default
        })
    } else {
        arr.push({
            path: _keyarr[1] + '/' + _keyarr[2],
            component: r(key).default
        })
    }
});

export default arr;