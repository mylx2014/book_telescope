module.exports = {
    pages: {
        index:{
            entry: 'src/pages/index/main.js',
            template: 'public/index.html',
            filename:'index.html'
        },
        login:{
            entry: 'src/pages/login/main.js',
            template: 'public/login.html',
            filename:'login.html',
        },
        ranking_list:{
            entry:'src/pages/ranking_list/main.js',
            template:'public/ranking_list.html',
            filename:'ranking_list.html'
        },
        book_type:{
            entry:'src/pages/book_type/main.js',
            template:'public/book_type.html',
            filename:'book_type.html'
        }
    },
    lintOnSave:false, //关闭语法检查
}