module.exports = {
    pages: {
        login:{
            entry: 'src/login/login.main.js',
            template: '/public/page/login.html',
            filename:'login.html',
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/login/login.main.js'
    },
    lintOnSave:false, //关闭语法检查
}