<template>
    <div id="book-list">
        <el-card class="book-list-wrapper">
            <div class="list-title" slot="header">
                <h2>男生</h2>
            </div>
            <div class="book-list">
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>都市</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>科幻</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>短篇</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>军事</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>仙侠</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>游戏</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>奇幻</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>悬疑</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>轻小说</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>历史</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>体育</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>玄幻</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>武侠</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>现实</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
            </div>
        </el-card>
        <el-card class="book-list-wrapper">
            <div class="list-title" slot="header">
                <h2>女生</h2>
            </div>
            <div class="book-list">
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>现代言情</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>仙侠奇缘</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>科幻空间</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>古代言情</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>玄幻言情</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>游戏竞技</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
                <ul class="book-list-item-wrapper clearfix">
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>悬疑侦探</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                    <li class="book-list-item">
                        <el-card class='item-wrapper'>
                            <div class="item-title" slot="header">
                                <h3>浪漫青春</h3>
                            </div>
                            <el-table :data='tableData' stripe>
                                <el-table-column label="排名" align="center" prop='id'></el-table-column>
                                <el-table-column label="书名" align="center">
                                    <template slot-scope="props">
                                        <a href="#">{{props.row.title}}</a>
                                    </template>
                                </el-table-column>
                                <el-table-column :label='listType' align="center" prop='target'></el-table-column>
                            </el-table>
                        </el-card>
                    </li>
                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: "BookList",
  data(){
    return{
      tableData: [
        {'id':1,'title':'test1','target':'10'},
        {'id':2,'title':'test2','target':'10'},
        {'id':3,'title':'test3','target':'10'},
        {'id':4,'title':'test','target':'10'},
        {'id':5,'title':'test','target':'10'},
        {'id':6,'title':'test','target':'10'},
        {'id':7,'title':'test','target':'10'},
        {'id':8,'title':'test','target':'10'},
        {'id':9,'title':'test','target':'10'},
        {'id':10,'title':'test','target':'10'},
      ]
    }
  },
  props:['listType']
}
</script>

<style scoped>
    #book-list{
    }

    .book-list-wrapper{
        margin-bottom: 20px;
    }

    .book-list-item-wrapper{
        margin-bottom: 10px;
    }

    .book-list-item{
        float: left;
        padding: 0 13.33px;
    }
</style>