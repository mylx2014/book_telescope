<template>
    <div id="book-user" class="w">
        <div class="card">
            <el-tabs type="border-card">
                <el-tab-pane label="登录">
                    <BookUserLogin></BookUserLogin>
                </el-tab-pane>
                <el-tab-pane label="注册">
                  <BookUserRegister></BookUserRegister>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import BookUserLogin from "./BookUserLogin";
import BookUserRegister from "./BookUserRegister";

export default {
  name: "BookUser",
  components:{BookUserLogin,BookUserRegister}
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