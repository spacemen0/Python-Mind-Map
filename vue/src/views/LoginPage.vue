<template>
    <el-container>
        <el-main>
            <div class="header">登录</div>
            <el-form ref="User" :model="User" :rules="rules">
                <el-form-item label="学号" prop="UserID">
                    <el-input v-model="User.UserID" placeholder="学号" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="Password">
                    <el-input type="password" v-model="User.Password" placeholder="密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login" class="btn">登 录</el-button>
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
        // 检查ID格式
        const checkID = (rule, value, callback) => {
            if (value === undefined)
                return callback(new Error('学号不能为空'));
            let regPos = /[0-9]/;
            if (!regPos.test(value))
                callback(new Error('请输入学号'));
            else if (value.length !== 12)
                callback(new Error('学号必须为12位'));
        };
        // 检查密码格式
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
                UserID: '',
                Password: ''
            },
            loginDialog: false,
            rules: {
                UserID: [
                    {validator: checkID, trigger: 'blur'}
                ],
                Password: [
                    {validator: validatePass, trigger: 'blur'}
                ],
            }
        }
    },
    methods: {
        login() {
            let url = `/login?StudentID=${this.User.UserID}&Password=${this.User.Password}`
            request.post(url).then(res => {
                console.log(res)
                if (res.status === 200) {
                    this.$message.success('登陆成功！');
                    // 存储token
                    let token = res.data.data.token;
                    window.localStorage.setItem("token", token);
                    this.getuser();
                }
            }).catch((error) => {
                this.$message({
                    type: "error",
                    message: "登陆失败"
                })
                console.log(error);
            }).finally(() => {
                this.User.Password = '';
            })
        }
        ,
        // 获取用户信息
        getuser() {
            request.get('/user/getuser').then(res => {
                if (res.status === 200) {
                    // 将用户信息存储到store里
                    let user = res.data.data.user;
                    console.log('user', user);
                    this.$store.state.userInfo.userID = user.StudentID;
                    this.$store.state.userInfo.name = user.StudentName;
                    this.$store.state.userInfo.isAdmin = user.Admin;
                    this.$router.push('/main');
                }
            }).catch(error => {
                console.log('error', error);
                this.$message({
                    type: "error",
                    message: "获取用户信息失败"
                })
            })
        }
    }
}
</script>

<style scoped>
/deep/ .el-form-item__error {
    color: #F56C6C;
    font-size: 18px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 4em;
}

.btn {
    width: 95%;
    height: 2.7em;
    font-size: 1.5em;
    border-radius: 5px;
}

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

/deep/ .el-form-item__label {
    font-size: 22px;
    /*width: 3em*/
}

/deep/ .el-input__inner {
    font-size: 22px;
    height: 50px;
    line-height: 50px;
}

.el-form {
    width: 20vw;
    margin: 8vh auto;
    padding: 3em 2em 1em 2em;
    background: #fafafa;
    border: 1px solid #ebebeb;
    box-shadow: rgba(0, 0, 0, 0.14902) 0 1px 1px 0, rgba(0, 0, 0, 0.09804) 0 1px 2px 0;
    font-size: 20px;
    border-radius: 10px;
}

.el-form-item {
    margin-bottom: 2em;
    margin-top: 2em;
}

.el-input {
    width: 80%;
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
    background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -moz-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -webkit-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -o-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), -ms-linear-gradient(top, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, .4) 10%, rgba(138, 114, 76, 0) 40%), linear-gradient(to bottom, rgba(57, 173, 219, .25) 0%, rgba(42, 60, 87, .4) 100%), linear-gradient(135deg, #670d10 0%, #092756 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3E1D6D', endColorstr='#092756', GradientType=1);
}
</style>
