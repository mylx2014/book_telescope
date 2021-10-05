<template>
    <div id="book-user-register">
        <el-card class="box-card">
            <el-form :rules="'rules'" ref="ruleForm" label-width="70px" class="user-info">
                <el-form-item label="用户名">
                    <el-input placeholder="请输入用户名" style="width:200px"></el-input>
                </el-form-item>
                 <el-form-item label="昵称">
                    <el-input placeholder="请输入昵称" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input show-password placeholder="请输入密码" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input show-password placeholder="请再次输入密码" style="width:200px"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input type="email" placeholder="请输入邮箱"  style="width:200px"></el-input>
                </el-form-item>
                <el-checkbox v-model="checked" style="margin-bottom:20px">
                    我同意并遵守上述的
                    <el-link type="info" style="padding:0 3px">用户协议</el-link>
                    和
                    <el-link type="info" style="padding:0 3px">隐私协议</el-link>
                </el-checkbox>
                <div class="register-wrapper">
                    <el-button type="primary" round class="register-button">立即注册</el-button>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  name: "BookUserRegister"
}
</script>

<style scoped>
    #book-user-register{
        width: 80%;
        margin: 0 auto;
    }

    .register-wrapper{
        text-align: center;
    }
</style>