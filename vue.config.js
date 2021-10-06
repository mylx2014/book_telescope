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
        },
        book_man:{
            entry:'src/pages/book_man/main.js',
            template:'public/book_man.html',
            filename:'book_man.html'
        },
        book_woman:{
            entry:'src/pages/book_woman/main.js',
            template:'public/book_woman.html',
            filename:'book_woman.html'
        },
        book_new:{
            entry:'src/pages/book_new/main.js',
            template:'public/book_new.html',
            filename:'book_new.html'
        },
        book_end:{
            entry:'src/pages/book_end/main.js',
            template:'public/book_end.html',
            filename:'book_end.html'
        },
        home:{
            entry:'src/pages/home/main.js',
            template:'public/home.html',
            filename:'home.html'
        }

    },
    lintOnSave:false, //关闭语法检查
}