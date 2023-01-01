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
        <!-- 判断是否是管理员账户 -->
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
          value: '202230274477',
          label: '杨知武'
        }, {
          value: '202235643445',
          label: '李穎暚'
        }, {
          value: '202262562030',
          label: '程凯泽'
        },
          {
          value: '202264640156',
          label: '顾夏伊'
        }
        ,{//选项卡内容
          value: '202264640163',
          label: '姜宇辰'
        },
        {
          value:'202264640187',
          label:'蒋知乐'
       },
        {value:'202264640194'
        ,label:'梁昌祺'},
        {value:'202264640200'
        ,label:'王上'},
        {value:'202264640217'
        ,label:'王雨桐'},
        {value:'202264640224'
        ,label:'吴昕泽'},
        {value:'202264640231'
        ,label:'徐聪靓'},
        {value:'202264640248'
        ,label:'徐熠'},
        {value:'202264640255'
        ,label:'于瀚淼'},
        {value:'202264640262'
        ,label:'朱韵霏'},
        {value:'202264641344'
        ,label:'曹孟桉'},
        {value:'202264641351'
        ,label:'陈鸿博'},
        {value:'202264641368'
        ,label:'陈文睿'},
        {value:'202264641375'
        ,label:'付舒翎'},
        {value:'202264641382'
        ,label:'蒋梓涵'},
        {value:'202264641399'
        ,label:'李依钒'},
        {value:'202264641405'
        ,label:'梁嘉炜'},
        {value:'202264641412'
        ,label:'罗煦然'},
        {value:'202264641429'
        ,label:'毛展博'},
        {value:'202264641436'
        ,label:'邵泽枢'},
        {value:'202264641443'
        ,label:'汪煜新'},
        {value:'202264641450'
        ,label:'王庆全'},
        {value:'202264641467'
        ,label:'王艺纯'},
        {value:'202264641474'
        ,label:'王悦同'},
        {value:'202264641481'
        ,label:'徐文琪'},
        {value:'202264641498'
        ,label:'张洺硕'},
        {value:'202264641504'
        ,label:'张涵'},
        {value:'202264642013'
        ,label:'张继元'},
        {value:'202264642020'
        ,label:'张宸瑞'},
        {value:'202264642037'
        ,label:'周然'},
        {value:'202264642044'
        ,label:'周烨'},
        {value:'202264643430'
        ,label:'曹嘉懿'},
        {value:'202264643454'
        ,label:'李怡阳'},
        {value:'202264643461'
        ,label:'楼冰格'},
        {value:'202264643478'
        ,label:'马浩棋'}, 
      ],
      value: '请选择学生',
      echartsInstance: null,
      drawer: true,
      direction: "rtl",
      title: "mytitle",

      courseName: "python",
      index: 0,
      key: 0,
      ChapNum: 6,
    };
  },
  methods: {
    drawLine() {
      request.get("/user/getcrbystudentandchapter", {
          params: {
            //请求参数（条件查询）
            UserID: this.UserID=="100000000000"? this.value:this.$store.state.userInfo.userID,
            //判断是否为管理员账户
            Chapter: this.index + 1
          },
        })
        .then((res) => {
          console.log(res)

      this.echartsInstance.setOption({
        //画图
        title: { text: "个人完成情况" },
        dataset: {
          source: [
            ["amount", "product"],
            ...res.data.data.CompletionRate.map(({ Value, Chapter, Test }) => [Value, 'Chapter'+Chapter + ' ' + Test])
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
