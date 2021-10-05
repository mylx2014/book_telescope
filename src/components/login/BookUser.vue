<template>
    <div id="book-user" class="w">
        <div class="card">
            <el-tabs type="border-card">
                <el-tab-pane label="登录">
                    <BookUserLogin></BookUserLogin>
                </el-tab-pane>
                <el-tab-pane label="注册"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import BookUserLogin from "./BookUserLogin";

export default {
  name: "BookUser",
  components:{BookUserLogin}
}
</script>

<style scoped>
    #book-user{
        background-color: #F2F6FC;
    }

    .card{
        width: 50%;
        margin: 0 auto;
    }
</style>