<template>
  <!--<el-row>-->
  <!--<el-col v-if="!isLogin" :span="4" :offset="18">-->
  <!--  <el-button type="primary" @click="loginDialog = true">登录</el-button>-->
  <!--  <el-dialog :visible="loginDialog" :before-close="(done) => {this.loginDialog = false}" :width="'20%'">-->
  <!--    <el-form ref="User" :model="User" label-width="50px" :rules="rules">-->
  <!--      <el-form-item label="学号" prop="id">-->
  <!--        <el-input v-model="User.id" placeholder="学号" clearable></el-input>-->
  <!--      </el-form-item>-->
  <!--      <el-form-item label="密码" prop="password">-->
  <!--        <el-input type="password" v-model="User.password" placeholder="密码" clearable></el-input>-->
  <!--      </el-form-item>-->
  <!--      <el-form-item label-width="10px">-->
  <!--        <el-button type="primary" @click="login" style="width: 100%">登录</el-button>-->
  <!--      </el-form-item>-->
  <!--    </el-form>-->
  <!--  </el-dialog>-->
  <!--</el-col>-->
  <!--<el-col :span="4" :offset="14">-->
  <el-menu :default-active="'activeIndex'" router class="el-menu-demo" style="border-bottom-color: #5c5e63;" mode="horizontal"
           @select="" background-color="#37373c" active-text-color="#f6f4ef" text-color="rgb(184 184 184)">
    <el-menu-item disabled style="float: left; opacity: 1; cursor: auto; font-size: 20px">AI课堂</el-menu-item>
    <el-menu-item disabled style="opacity: 1; cursor: auto">{{ User.name }}, {{ User.id }}</el-menu-item>
    <el-menu-item>
      <el-button size="medium" style="padding: 20px" circle></el-button>
    </el-menu-item>
    <el-menu-item index="/personal">个人情况</el-menu-item>
    <el-menu-item index="/ranking">班级排名</el-menu-item>
    
    <el-menu-item index="/gragh">每周题数</el-menu-item>
    
    <el-menu-item index="/answer">答题界面</el-menu-item>
    <el-menu-item index="/main">知识图谱</el-menu-item>
  </el-menu>

  <!--  </el-col>-->
  <!--</el-row>-->
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
      activeIndex: 'this.$router.path',
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



.el-menu-demo {
  padding-right: 5%;
  padding-left: 10%;
}

.el-menu--horizontal > .el-menu-item {
  float: right;
  font-size: 16px;
  padding-left: 15px;
  padding-right: 15px;
}

/*.el-menu--horizontal > div {*/
/*  float: left;*/
/*  color: white;*/
/*  height: 100%;*/
/*  line-height: 100%;*/
/*  vertical-align: middle;*/
/*}*/

</style>