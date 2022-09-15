<template>
  <el-row>
    <el-col v-if="!isLogin" :span="4" :offset="18">
      <el-button type="primary" @click="loginDialog = true">登录</el-button>
      <el-dialog :visible="loginDialog" :before-close="(done) => {this.loginDialog = false}" :width="'20%'">
        <el-form ref="User" :model="User" label-width="50px" :rules="rules">
          <el-form-item label="学号" prop="id">
            <el-input v-model="User.id" placeholder="学号" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="User.password" placeholder="密码" clearable></el-input>
          </el-form-item>
          <el-form-item label-width="10px">
            <el-button type="primary" @click="login" style="width: 100%">登录</el-button>
          </el-form-item>
        </el-form>

      </el-dialog>
    </el-col>
    <el-col v-if="isLogin" :span="4" :offset="18">
      <el-button icon="el-icon-user-solid" circle></el-button>
      {{ User.name }}, {{ User.id }}
    </el-col>
  </el-row>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "Header",
  data() {
    const checkID = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('学号不能为空'));
      }
      let regPos = /[0-9]/;
      if (!regPos.test(value)) {
        callback(new Error('请输入学号'));
      } else {
        if (value.length !== 12) {
          callback(new Error('学号必须为12位'));
        } else {
          callback();
        }
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      isLogin: false,
      User: {
        name: '张三',
        id: '202034340099',
        password: ''
      },
      loginDialog: false,
      rules: {
        id: [
          {validator: checkID, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    login() {
      request.post("/login", this.User).then(res=>{
        if (res.code === 0) {
          this.isLogin = true;
          this.$message({
            type: "success",
            message: "登陆成功"
          })
        } else {
          this.$message({
            type: "error",
            message: "登陆失败"
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-row {
  padding: 5px;
  height: 50px;
  background-color: #F2F6FC;
}

.el-icon-user-solid {

}
</style>