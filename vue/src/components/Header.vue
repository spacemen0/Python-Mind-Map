<template>
    <el-menu :default-active="'activeIndex'" router class="el-menu-demo" style="border-bottom-color: #5c5e63;"
             mode="horizontal"
             @select="" background-color="#37373c" active-text-color="#f6f4ef" text-color="rgb(184 184 184)">
        <el-menu-item disabled style="float: left; opacity: 1; cursor: auto; font-size: 20px">AI课堂</el-menu-item>
        <!--<el-menu-item disabled style="opacity: 1; cursor: auto">{{ User.name }}, {{ User.userID }}</el-menu-item>-->
        <el-submenu index="" style="padding-left: 0; color: white!important;">
            <template slot="title">
                <!--<el-button size="medium" style="padding: 20px" circle></el-button>-->
                {{ User.name }} , {{ User.userID }}
            </template>
            <el-menu-item index="/login">注销</el-menu-item>
        </el-submenu>

        <el-menu-item index="/personal">{{ User.userID === '100000000000' ? '班级情况' : '个人情况' }}</el-menu-item>

        <!--        <el-menu-item index="/ranking">班级排名</el-menu-item>-->

        <!--        <el-menu-item index="/gragh">每周题数</el-menu-item>-->

        <!--<el-menu-item index="/answer">答题界面</el-menu-item>-->
        <el-menu-item index="/main">知识图谱</el-menu-item>

        <!--管理员功能区-->
        <el-menu-item index="/studentInfoList" v-if="this.User.isAdmin === true">学生信息</el-menu-item>
        <el-button class="btn" type="info" v-if="this.User.isAdmin === true" @click="()=>{this.uploadDialog = true}">
            导入学生账户
        </el-button>
        <el-dialog :visible.sync="uploadDialog" width="20%" top="25vh" :modal="false" :modal-append-to-body="false">
            <el-upload class="upload-demo" drag :limit="1" :file-list="fileList" show-file-list :auto-upload="true"
                       action="#" :on-change="handleChange" :http-request="upload">
                <i class="el-icon-upload"></i>
                <div>将文件拖到此处，或<em>点击上传</em></div>
                <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
            <!--<el-button type="primary" @click="upload" class="subBtn">上传</el-button>-->
        </el-dialog>
    </el-menu>
</template>

<script>
import request from "@/utils/request";
const FormData = require('form-data')
export default {
    name: "Header",
    inject: ['reload'],
    data() {
        return {
            activeIndex: 'this.$router.path',
            User: {
                name: '',
                userID: '',
                isAdmin: ''
            },
            uploadDialog: false,
            fileList: []
        }
    },
    mounted() {
        this.User.name = this.$store.state.userInfo.name;
        this.User.userID = this.$store.state.userInfo.userID;
        this.User.isAdmin = this.$store.state.userInfo.isAdmin;
    },
    watch: {
        $route() {
            this.reload();
        },
    },
    methods: {
        handleChange(file, fileList) {
            this.fileList = fileList;
        },
        upload(item) {
            this.$message('文件上传中........')
            let data = new FormData();
            data.append('students', this.fileList[0].raw);
            request.post(
                '/admin/importstudents',
                data,
                {
                    headers: {"Content-Type": "multipart/form-data"}
                }
            ).then(res => {
                if (res.status === 200) {
                    this.$message({
                        type: "success",
                        message: "上传成功"
                    });
                }
            }).catch(error => {
                console.log(error);
                this.$message({
                    type: "error",
                    message: "上传失败"
                });
            })
        }
    }
}
</script>

<style scoped>
/deep/ .el-upload-dragger,
/deep/ .el-upload {
    width: 100%;
}

/deep/ .el-dialog__body {
    font-size: 1.1em;
}

.btn {
    float: right;
    margin: 0.6em;
    border-radius: 0.3em;
}

.subBtn {

}

.el-menu-demo {
    padding-right: 5%;
    padding-left: 10%;
}

.el-menu--horizontal > .el-submenu,
.el-menu--horizontal > .el-menu-item {
    float: right;
    font-size: 16px;
    padding-left: 15px;
    padding-right: 15px;
}

/deep/ .el-submenu__title {
    font-size: 16px;
    color: ghostwhite;
}

</style>
