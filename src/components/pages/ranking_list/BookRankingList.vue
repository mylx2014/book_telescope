<template>
    <div class="w" id='book-ranking-list'>
        <el-tabs type="border-card" :stretch='true'>
            <el-tab-pane label="推荐榜单">
                <BookList listType="推荐"></BookList>
            </el-tab-pane>
            <el-tab-pane label="点击榜单">
                <BookList listType="点击"></BookList>
            </el-tab-pane>
            <el-tab-pane label="收藏榜单">
                <BookList listType="收藏"></BookList>
            </el-tab-pane>
            <el-tab-pane label="新书榜单">
                <BookList listType="新书值"></BookList>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import BookList from "./BookList";

export default {
  name: "BookRankingList",
  components:{BookList}
}
</script>

<style scoped>
    #book-ranking-list{
        background-color: #F2F6FC;
    }
</style>