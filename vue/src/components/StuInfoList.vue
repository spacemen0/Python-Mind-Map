<template>
    <el-container>
        <el-aside>
            <el-menu mode="vertical" class="menu">
                <el-menu-item @click="() => {return getdata(1)}">1班</el-menu-item>
                <el-menu-item @click="() => {return getdata(2)}">2班</el-menu-item>
                <el-menu-item @click="() => {return getdata(3)}">环境全英班</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-table :data="tableData" class="table" stripe>
                <el-table-column prop="StudentID" label="学号" width="300"></el-table-column>
                <el-table-column prop="StudentName" label="姓名" width="300"></el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
import request from "@/utils/request";

export default {
    name: "StuInfoList",
    data() {
        return {
            tableData: [],
        }
    },
    mounted() {
        this.getdata(1);
    },
    methods: {
        getdata(classID) {
            request.get(
                '/admin/getstudents', {
                    params: {
                        ClassID: classID
                    }
                }).then(res => {
                    console.log(res);
                if (res.status === 200)
                    this.tableData = res.data.data.user;
            }).catch(error => {
                console.log(error);
                this.$message({
                    type: "error",
                    message: "查询失败"
                });
            });
        }
    }
}
</script>

<style scoped>
.table {
    width: 50vw;
    margin: 1% 10vw;
    font-size: 20px;
}

.menu {
    margin-top: 15%;
}

.el-menu-item {
    height: 72px;
    line-height: 72px;
    font-size: 22px;
    text-align: center;
}
</style>
