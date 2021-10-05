<template>
    <div id="book-banner" class="w">
        <div class="banner-wrapper clearfix">
            <el-carousel class="banner" height="400px">
                <el-carousel-item class="banner-item">
                    <el-card class="book-info-wrapper" style="backgroung-color:#bfa">
                        <div slot="header" class="book-cover">
                            <img src="../../../assets/龙门战神-胡说大师.jpg" alt="cover">
                        </div>
                        <div class="book-info">
                            <h2>龙门战神</h2>
                            <p>胡说大师/现实</p>
                        </div>
                    </el-card>
                </el-carousel-item>

                <el-carousel-item class="banner-item">
                    <el-card class="book-info-wrapper">
                        <div slot="header" class="book-cover">
                            <img src="../../../assets/重生之最强人生-小猪火起来.jpg" alt="cover">
                        </div>
                        <div class="book-info">
                            <h2>重生之最强人生</h2>
                            <p>小猪火起来/现代</p>
                        </div>
                    </el-card>
                </el-carousel-item>

                <el-carousel-item class="banner-item">
                    <el-card class="book-info-wrapper">
                        <div slot="header" class="book-cover">
                            <img src="../../../assets/女大三十送江山-熙九歌.jpg" alt="cover">
                        </div>
                        <div class="book-info">
                            <h2>女大三十送江山</h2>
                            <p>熙九歌/现实</p>
                        </div>
                    </el-card>
                </el-carousel-item>

                <el-carousel-item class="banner-item">
                    <el-card class="book-info-wrapper">
                        <div slot="header" class="book-cover">
                            <img src="../../../assets/我无敌以后-三石圆.jpg" alt="cover">
                        </div>
                        <div class="book-info">
                            <h2>我无敌以后</h2>
                            <p>三石圆/现代</p>
                        </div>
                    </el-card>
                </el-carousel-item>

                <el-carousel-item class="banner-item">
                    <el-card class="book-info-wrapper">
                        <div slot="header" class="book-cover">
                            <img src="../../../assets/重生之我是一个渣男-火红大辣椒.jpg" alt="cover">
                        </div>
                        <div class="book-info">
                            <h2>重生之我是一个渣男</h2>
                            <p>火红大辣椒/现代</p>
                        </div>
                    </el-card>
                </el-carousel-item>
            </el-carousel>

            <el-card class="recommend">
                <div class="recommend-title" slot="header">
                    <h2>热门推荐</h2>
                </div>
                <div class="recommend-list">
                    <ul class="recomend-item">
                        <li class="item-info-wrapper">
                            <div class="item-info-cover">
                                <img src="../../../assets/三寸人间-耳根.jpg" alt="三寸人间">
                            </div>
                            <el-card class="item-info">
                                <div class="item-info-header" slot="header">
                                    <span class="title"><a href="#">三寸人间</a></span>
                                    <span class="author">耳根</span>
                                </div>
                                <div class="item-info-describe">
                                    举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
                                </div>
                            </el-card>
                        </li>
                        <li class="item-info-wrapper">
                            <div class="item-info-cover">
                                <img src="../../../assets/圣墟.jpg" alt="三寸人间">
                            </div>
                            <el-card class="item-info">
                                <div class="item-info-header" slot="header">
                                    <span class="title"><a href="#">圣墟</a></span>
                                    <span class="author">辰东</span>
                                </div>
                                <div class="item-info-describe">
                                    在破败中崛起，在寂灭中复苏。 沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……
                                </div>
                            </el-card>
                        </li>
                    </ul>
                    <ul class="recomend-item">
                        <li class="item-info-wrapper">
                            <div class="item-info-cover">
                                <img src="../../../assets/绝品邪少.jpg" alt="三寸人间">
                            </div>
                            <el-card class="item-info">
                                <div class="item-info-header" slot="header">
                                    <span class="title"><a href="#">绝品邪少</a></span>
                                    <span class="author">陨落星辰</span>
                                </div>
                                <div class="item-info-describe">
                                    谭笑笑说：我是极品美女！ 彭莹诗说：我是极品御姐！ 尹宝儿说：我是极品萝莉！ 上官无道说：我还是极品公子呢…… 叶潇震撼登场：吵什么吵，少爷才是主角，少爷的口号是践踏一切极品，只做人间绝品！ 【PS：陨落星辰自《校园风流邪神》之后又一都市巅峰之作！】
                                </div>
                            </el-card>
                        </li>
                        <li class="item-info-wrapper">
                            <div class="item-info-cover">
                                <img src="../../../assets/道君.jpg" alt="三寸人间">
                            </div>
                            <el-card class="item-info">
                                <div class="item-info-header" slot="header">
                                    <span class="title"><a href="#">道君</a></span>
                                    <span class="author">跃千愁</span>
                                </div>
                                <div class="item-info-describe">
                                    一个地球神级盗墓宗师，闯入修真界的故事…… 桃花源里，有歌声。 山外青山，白骨山。 五花马，千金裘，倚天剑，应我多情，啾啾鬼鸣，美人薄嗔。 天地无垠，谁家旗鼓，碧落黄泉，万古高楼。 为义气争雄！ 为乱世争霸！ 你好，仙侠！
                                </div>
                            </el-card>
                        </li>
                    </ul>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "BookBanner",
}
</script>

<style scoped>
    #book-banner{
        padding-bottom: 20px;
        background-color: #F5F7FA;
    }

    .banner{
        float: left;
        width: 50%;
    }

    .banner-item{
        /* background-color: #bfa; */
    }

    .book-info-wrapper{
        width: 65%;
        height: 100%;
        margin: 0 auto;
        background-color: #EBEEF5;
    }

    .book-cover{
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }

    .book-cover img{
        height: 250px;
    }

    .book-info{
        position: relative;
        text-align: center;
    }

    .book-info h2{
        position: relative;
        top: -10px;
        margin-bottom: 10px;
        font-size: 30px;
        color: #303133;
    }

    .book-info p{
        position: relative;
        top: -5px;
        font-size: 15px;
        font-style: inherit;
        color: #909399;
    }

    .recommend{
        width: 498px;
        height: 400px;
        float: left;
    }

    .recommend-list{
        background-color: #bfa;
    }

    .item-info-wrapper{
        width: 50%;
        float: left;
    }

    .item-info-cover{
        width: 50%;
        float: left;
    }

    .item-info-cover img{
        width: 100%;
    }

    .item-info{
        height: 152.66px;
    }

    .item-info .item-info-header{
        position: relative;
        font-size: 12px;
    }

    .item-info-header .title{
        position: absolute;
        left: -15px;
    }

    .item-info-header .author{
        position: absolute;
        right: -15px;
    }

    .item-info-describe{
        font-size: 10px;
    }
</style>