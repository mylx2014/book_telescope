<template>
    <div id='book-footer' class="w">
        <div class="divider-wrapper">
            <el-divider></el-divider>
        </div>
        <div class="links-wrapper clearfix">
            <span class="links-title">
                友情链接：
            </span>
            <span class="links-content">
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>、
                <a href="/">望远镜小说网</a>
            </span>
        </div>
        <div class="website-info-wrapper">
            <p>本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>
        </div>
        <div class="copyright-wrapper">
            <p>Copyright &copy; 2021 望远镜小说网 All Rights Reserved.</p>
        </div>
        <div class="icp-wrapper">
            <p>粤ICP备8888888号</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "BookFooter"
}
</script>

<style scoped>
    #book-footer{
        background-color: #F2F6FC;
    }

    #book-footer div{
        padding-top: 20px;
    }

    #book-footer .divider-wrapper div{
        padding:0 0;
    }

    .links-title{
        color: #909399;
        font-size: 16px;
    }

    .links-content a{
        color:#C0C4CC;
        font-size: 16px;
    }

    .links-content a:hover{
        color: tomato;
    }

    p{
        color:#909399;
        text-align: center;
        font-size: 12px;
    }
</style>