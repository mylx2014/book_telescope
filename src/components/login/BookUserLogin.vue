<template>
    <div id="book-user-login">
        <el-card class="box-card">
            <el-form ref="form" label-width="55px" class="user-info">
                <el-form-item label="用户名">
                    <el-input placeholder="请输入用户名" style="width:200px"></el-input>
                    <el-link type="primary" style="margin-left:10px">注册账号</el-link>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input show-password placeholder="请输入密码" style="width:200px"></el-input>
                    <el-link type="primary" style="margin-left:10px">忘记密码</el-link>
                </el-form-item>
                <div class="login-wrapper">
                    <el-button type="primary" round class="login-button">立即登录</el-button>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  name: "BookUserLogin",
}
</script>

<style scoped>
    #book-user-login{
        width: 80%;
        margin: 0 auto;
    }

    .box-card{
        margin: 20px auto;
    }

    .user-info{
        padding: 10px;
        padding-left: 0;
    }

    .user-info:last-child{
        text-align: center;
    }

    .login-button{
        position: relative;
        left: 10px;
    }

    .user-info:last-child::before{
        content: '';
    }
</style>