<template>
    <div id="book-type" class="w">
        <el-card class="book-man-wrapper" :body-style="{'padding':'0px',}">
            <div class="man-title clearfix" slot="header">
                <h2>{{ bookType }}</h2>
                <a href="#">更多</a>
            </div>
            <div class="book-info-wrapper">
                <ul class="book-info-list clearfix">
                    <li><a href="#">
                        <el-card class="book-info">
                            <div class="book-cover" slot="header">
                                <img src="../../../assets/道君.jpg" alt="">
                            </div>
                            <div>
                                <h3>道君</h3>
                                <h4>跃千愁</h4>
                            </div>
                        </el-card>
                    </a></li>

                    <li><a href="#">
                        <el-card class="book-info">
                            <div class="book-cover" slot="header">
                                <img src="../../../assets/道君.jpg" alt="">
                            </div>
                            <div>
                                <h3>道君</h3>
                                <h4>跃千愁</h4>
                            </div>
                        </el-card>
                    </a></li>

                    <li><a href="#">
                        <el-card class="book-info">
                            <div class="book-cover" slot="header">
                                <img src="../../../assets/道君.jpg" alt="">
                            </div>
                            <div>
                                <h3>道君</h3>
                                <h4>跃千愁</h4>
                            </div>
                        </el-card>
                    </a></li>

                    <li><a href="#">
                        <el-card class="book-info">
                            <div class="book-cover" slot="header">
                                <img src="../../../assets/道君.jpg" alt="">
                            </div>
                            <div>
                                <h3>道君</h3>
                                <h4>跃千愁</h4>
                            </div>
                        </el-card>
                    </a></li>

                    <li><a href="#">
                        <el-card class="book-info">
                            <div class="book-cover" slot="header">
                                <img src="../../../assets/道君.jpg" alt="">
                            </div>
                            <div>
                                <h3>道君</h3>
                                <h4>跃千愁</h4>
                            </div>
                        </el-card>
                    </a></li>
                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: "BookType",
  props:['bookType']
}
</script>

<style scoped>
    #book-type{
        background-color: #F5F7FA;
        padding-bottom: 20px;
    }

    .book-man-wrapper{
        border-radius: 10px;
        border-right: none;
    }

    .book-man-wrapper:first-child{
        background-color: #409EFF;
    }

    

    .man-title h2{
        float: left;
        color: #F2F6FC;
    }

    .man-title a{
        float: right;
        color: #f2f6fc;
    }

    .man-title a:hover{
        color: tomato;
    }

    .book-info:hover{
        background-color: #E6A23C;
        color: #F2F6FC;
    }

    .book-info-list{
        padding: 10px 0;
        background-color: #EBEEF5;
    }

    .book-info-list li{
        width: 183.2px;
        padding: 0 8px;
        float: left;
    }

    li img{
        width: 100%;
    }

    .book-info{
        text-align: center;
    }

    .book-info h4{
        padding: 10px 0;
    }
</style>