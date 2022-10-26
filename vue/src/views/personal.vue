<template>
  

  <el-container>
    <el-aside class="aside" width="200px">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="item in ChapNum"
          v-bind:key="item"
          @click="updateGraph(item - 1)"
        >
          <span slot="title">Chapter {{ item }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="z-index: 1">
      <el-select v-if="UserID=='100000000000'" v-model="value" placeholder="请选择" @change="drawLine()">
        
        <el-option

      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      <div id="myChart" :style="{ width: '900px', height: '500px' }" />
    </el-main>
  </el-container>
</template>
  
  
  
  <script>
import request from "@/utils/request";

export default {
  name: "personal",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.echartsInstance = this.$echarts.init(document.getElementById("myChart"));
    this.UserID=this.$store.state.userInfo.userID;
    this.drawLine();
  },
  data() {
    return {
      UserID: '',
      options: [{
          value: '100000000000',
          label: '100000000000'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '100000000000',
      echartsInstance: null,
      drawer: true,
      direction: "rtl",
      title: "mytitle",

      courseName: "python",
      index: 0,
      key: 0,
      ChapNum: 4,
    };
  },
  methods: {
    drawLine() {

      //分页查询axios请求方式
      request
        .get("/user/getcrbystudentandchapter", {
          params: {
            //请求参数（条件查询）
            UserID: this.UserID=="100000000000"? this.value:this.$store.state.userInfo.userID,
            Chapter: this.index + 1
          },
        })
        .then((res) => {
          console.log(res)
          //this.tableData = res.records;
          //this.total = res.total;
          

      this.echartsInstance.setOption({
        title: { text: "个人完成情况" },
        dataset: {
          source: [
            ["amount", "product"],
            ...res.data.data.CompletionRate.map(({ Value, Chapter, Test }) => [Value, Chapter + ' ' + Test])
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "amount" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Score", "Low Score"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#65B581", "#FFCE34", "#FD665F"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      });
      });
    },


    
    updateGraph(index) {
      this.key++;
      this.index = index;
      console.log(this.index);
      this.drawLine();
    },
  },
};
</script>
<style scoped>
.el-menu-vertical-demo {
  height: 100%;
  border-right-width: 0;
}

.el-menu-item {
  height: 10vh;
  line-height: 10vh;
  font-size: 25px;
}

.aside {
  z-index: 2;
  text-align: center;
}
</style>
