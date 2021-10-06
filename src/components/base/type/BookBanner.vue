<template>
    <div id="book-banner">
        <ul class="book-banner clearfix">
            <li>
                <div class="cover">
                    <img src="../../../assets/三寸人间-耳根.jpg" alt="三寸人间">
                </div>
                <el-card class="book-info" :body-style="{padding:'10px'}">
                    <div class="book-base">
                        <span class="book-title">三寸人间</span>
                        <span class="book-author">耳根</span>
                    </div>
                    <div class="describe">
                        举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
                    </div>
                </el-card>
            </li>
            <li>
                <div class="cover">
                    <img src="../../../assets/圣墟.jpg" alt="三寸人间">
                </div>
                <el-card class="book-info" :body-style="{padding:'10px'}">
                    <div class="book-base">
                        <span class="book-title">圣墟</span>
                        <span class="book-author">辰东</span>
                    </div>
                    <div class="describe">
                        在破败中崛起，在寂灭中复苏。 沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……
                    </div>
                </el-card>
            </li>
            <li>
                <div class="cover">
                    <img src="../../../assets/绝品邪少.jpg" alt="三寸人间">
                </div>
                <el-card class="book-info" :body-style="{padding:'10px'}">
                    <div class="book-base">
                        <span class="book-title">绝品邪少</span>
                        <span class="book-author">陨落星辰</span>
                    </div>
                    <div class="describe">
                        谭笑笑说：我是极品美女！ 彭莹诗说：我是极品御姐！ 尹宝儿说：我是极品萝莉！ 上官无道说：我还是极品公子呢…… 叶潇震撼登场：吵什么吵，少爷才是主角，少爷的口号是践踏一切极品，只做人间绝品！ 【PS：陨落星辰自《校园风流邪神》之后又一都市巅峰之作！】
                    </div>
                </el-card>
            </li>
        </ul>
        <ul class="book-banner clearfix">
            <li>
                <div class="cover">
                    <img src="../../../assets/三寸人间-耳根.jpg" alt="三寸人间">
                </div>
                <el-card class="book-info" :body-style="{padding:'10px'}">
                    <div class="book-base">
                        <span class="book-title">三寸人间</span>
                        <span class="book-author">耳根</span>
                    </div>
                    <div class="describe">
                        举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
                    </div>
                </el-card>
            </li>
            <li>
                <div class="cover">
                    <img src="../../../assets/三寸人间-耳根.jpg" alt="三寸人间">
                </div>
                <el-card class="book-info" :body-style="{padding:'10px'}">
                    <div class="book-base">
                        <span class="book-title">三寸人间</span>
                        <span class="book-author">耳根</span>
                    </div>
                    <div class="describe">
                        举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
                    </div>
                </el-card>
            </li>
            <li>
                <div class="cover">
                    <img src="../../../assets/三寸人间-耳根.jpg" alt="三寸人间">
                </div>
                <el-card class="book-info" :body-style="{padding:'10px'}">
                    <div class="book-base">
                        <span class="book-title">三寸人间</span>
                        <span class="book-author">耳根</span>
                    </div>
                    <div class="describe">
                        举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。
                    </div>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "BookBanner"
}
</script>

<style scoped>
    #book-banner{}

   .book-banner{
       margin-bottom: 15px;
   }

   .book-banner li{
       width: 315px;
       float: left;
       margin: 0 9.1px;
   }

   li .cover{
       width: 115px;
       float: left;
   }

   li .cover img{
       width: 100%;
   }

   li .book-info{
       width: 198px;
       height: 160px;
       float: left;
       background-color: #EBEEF5;
   }

   .book-info:first-child{
       padding: 0;
   }

   .book-info .book-base{
       font-size: 14px;
       margin-bottom: 10px;
       border-bottom: 1px solid #409EFF;
   }

   .book-base span.book-title{
       font-weight: bold;
   }

   .book-base span.book-author{
       float: right;;
   }

   .describe{
       font-size: 14px;
       text-indent: 2em; 
   }
</style>