<template>
  <div id="user-info" class="clearfix">
    <div class="info-wrapper clearfix" :style="{backgroundImage:`url(${imgUrl})`}">
      <div class="user-info-wrapper clearfix">
        <div class="user-avatar">
            <el-upload action='localhost'>
                <el-avatar :size="100" :src="require('@/assets/avatar.png')" style="z-index:1000"></el-avatar>
            </el-upload>
        </div>
        <ul class="user-info">
          <li><h3>NickName</h3></li>
          <li><p>10001</p></li>
        </ul>
      </div>
      <div class="modify-info-wrapper">
        <el-button type="success" @click="dialogVisible=!dialogVisible">
          <i class="el-icon-setting"></i>
          修改信息
        </el-button>
        <el-dialog title="修改用户信息" :visible.sync="dialogVisible" width="38%">
          <el-form ref="form" label-width="80px">
            <el-form-item label="用户名">
              <el-input placeholder="请输入用户名" style="width:78%"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input placeholder="请输入昵称" style="width:78%"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-button type="success" @click="modifyPasswordLog=true">修改密码</el-button>
            </el-form-item>
            <el-dialog title="修改密码" :visible.sync="modifyPasswordLog" append-to-body width="30%">
              <el-steps :active="active" finish-status="success" align-center>
                <el-step title="验证邮箱"></el-step>
                <el-step title="设置密码"></el-step>
                <el-step title="修改完成"></el-step>
              </el-steps>

              <el-form ref="form" label-width="80px" v-if="active===0" class="form-content">
                <el-form-item label="邮箱">
                  <el-input placeholder="请输入邮箱" style="width:60%" type="email"></el-input>
                  <el-button type="primary" style="margin-left:20px" @click="handleCheck" ref='check'>发送验证码</el-button>
                </el-form-item>
                <el-form-item label="验证码">
                  <el-input placeholder="请输入验证码" style="width:60%"></el-input>
                </el-form-item>
              </el-form>

              <el-form ref="form" label-width="80px" v-else-if="active===1" class="form-content">
                <el-form-item label="密 码">
                  <el-input placeholder="请输入密码" style="width:88%" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                  <el-input placeholder="请再次输入密码" style="width:88%" show-password></el-input>
                </el-form-item>
              </el-form>

               <el-card v-else class="form-content">
                   <el-result icon="success" title="修改成功"></el-result>
               </el-card>
              <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="handlePassword" ref='button'>下一步</el-button>
                </span>
            </el-dialog>
            <el-form-item label="邮箱">
              <el-input placeholder="请输入邮箱" style="width:78%" type="email"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">提 交</el-button>
            </span>
        </el-dialog>


      </div>
    </div>
  </div>
</template>

<script>
import backgroundImg from '@/assets/backgroundImg.png'

export default {
  name: "UserInfo",
  data() {
    return {
      imgUrl: backgroundImg,
      dialogVisible: false,
      modifyPasswordLog: false,
      active: 0
    }
  },
  methods: {
    handleCheck() {
      clearInterval(this.timer)
      let number = 60
      this.$refs.check.disabled = true
      this.timer = setInterval(() => {
        this.$refs.check.$el.innerText = number
        number--
        if (!number) {
          clearInterval(this.timer)
          this.$refs.check.$el.innerText = '发送验证码'
          this.$refs.check.disabled = false
        }
      }, 1000)
    },
    handlePassword() {
      this.active++
      if (this.active === 1) {
        this.$refs.button.$el.innerText = '提 交'
      } else if (this.active === 2) {
        this.$refs.button.$el.innerText = '关 闭'
      } else {
        this.modifyPasswordLog = false
        this.active = 0
        this.$refs.button.$el.innerText = '下一步'
      }

    },
  }
}
</script>

<style scoped>
#user-info {
  border: 1px solid #F2F6FC;
}

.info-wrapper {
  width: 990px;
  margin: 1px 5px;
  border: 1px solid #EBEEF5;
}

.user-info-wrapper {
  float: left;
}

.user-avatar {
  float: left;
  margin: 0 55px;
  overflow: hidden;
}

.user-avatar span.change-avatar{
    /* display: none; */
    width: 100px;
    height: 100px;
    vertical-align: bottom; 
    position: absolute;
    color: #F2F6FC;
    top: 60px;left: 0;right: 0;
    margin: 10px auto;
    background-color: rgba(0, 0,   0, .6);
}

.user-info {
  position: relative;
  float: left;
  left: -30px;
  height: 100px;
  line-height: 80px;
}

.user-info li h3 {
  color: #C0C4CC;
}

.user-info li p {
  position: absolute;
  text-align: center;
  top: 30px;
  left: 15px;
  color: #C0C4CC;
}


.modify-info-wrapper {
  float: right;
  height: 100px;
  line-height: 100px;
  margin-right: 25px;
}

.form-content{
    margin: 20px auto;
}
</style>