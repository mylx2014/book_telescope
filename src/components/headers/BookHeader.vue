<template>
    <div>
        <BookTag/>
        <div class="book-header w">
            <div class="header-main  clearfix">
                <div class="logo-wrapper">
                    <a href="/" class="logo">
                        <img src="../../assets/logo.png" alt="">
                    </a>
                </div>
                <div class="search-wrapper clearfix">
                    <div class="search-input">
                        <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="search-button">
                        <el-button type="primary">搜索</el-button>
                    </div>
                </div>
                <div class="user-info-wrapper">
                    <ul class="user-info">
                        <li><a href="/login">登录</a></li>
                        <li>|</li>
                        <li><a href="#">注册</a></li>
                    </ul>
                </div>
            </div>
            <div class="header-nav w">
                <ul class="nav clearfix">
                    <li><a href="/" target="_blank">首页</a></li>
                    <li><a href="#">排行榜</a></li>
                    <li><a href="#">分类</a></li>
                    <li><a href="#">男生</a></li>
                    <li><a href="#">女生</a></li>
                    <li><a href="#">最新小说</a></li>
                    <li><a href="#">完本小说</a></li>
                    <li><a href="#">我的书架</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BookTag from "./BookTag";

export default {
  name: "BookHeader",
  components:{BookTag}
}
</script>

<style scoped>
   .book-header{
       background-color: #F5F7FA;
       padding-bottom: 20px;
   }

   .header-main{
       padding: 10px 0;
   }

   .logo-wrapper,.search-wrapper{
       float: left;
   }

   .logo-wrapper,.user-info-wrapper{
       width: 200px;
   }

   .search-wrapper{
       width: 575px;
       height: 100px;
       margin-left:25px
   }

   .search-input{
       width: 400px;
       line-height: 100px;
   }

   .search-button{
       margin: 0 10px;
       line-height: 100px;
   }

   .search-input,.search-button{
       float: left;
   }

   .user-info-wrapper{
       position: relative;
       float: right;
       height: 100px;
   }

   .user-info{
       position: absolute;
       left: 10px;
   }

   .user-info li{
       float: left;
       line-height: 100px;
       color: #303133;
   }

   .user-info li a{
       color: #303133;
   }

   .user-info li:nth-child(2){
       padding: 0 20px;
   }

   .user-info li a:hover{
       color: tomato;
   }

    .header-nav{
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
        overflow: hidden;
    }

    .nav li{
        float: left;
        width: 125px;
        text-align: center;
        background-color: #409EFF;
    }

    .nav li a{
        display: block;
    }

    .nav li:hover{
        background-color: #E6A23C;
    }
</style>