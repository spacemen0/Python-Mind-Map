<template>
  <el-container>
    <el-main>
      <div class="header">登录</div>
      <el-form ref="User" :model="User" label-width="50px" :rules="rules">
        <el-form-item label="学号" prop="id">
          <el-input v-model="User.id" placeholder="学号" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="User.password" placeholder="密码" clearable></el-input>
        </el-form-item>
        <el-form-item label-width="10px">
          <el-button type="primary" @click="login" style="width: 100%; height: 45px">登   录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "LoginPage",
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
      request.post("/login", this.User).then(res => {
        if (res.code === 0) {
          this.$router.push('/main');
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
.header {
  text-align: center;
  font-size: 50px;
  color: #fafafa;
  position: relative;
  top: 6%;
}

/*.login {*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  margin: -150px 0 0 -150px;*/
/*  width:300px;*/
/*  height:300px;*/
/*}*/

.el-form {
  width: 380px;
  margin: 8vh auto;
  padding: 3em 2em 1em 2em;
  background: #fafafa;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 1px 0px, rgba(0, 0, 0, 0.09804) 0px 1px 2px 0px;
  font-size: 20px;
  border-radius: 10px;
}

.el-form-item {
  margin-bottom: 2em;
  margin-top: 2em;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 50%;
  height: 100vh;
  /*background: #eee;*/
  -webkit-font-smoothing: antialiased;

  /*width: 100%;*/
  /*height:100%;*/
  font-family: 'Open Sans', sans-serif;
  background: #092756;
  background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
  background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
  background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
  background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}
</style>