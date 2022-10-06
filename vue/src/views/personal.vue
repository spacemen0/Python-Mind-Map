<template>
    
    <el-container>
    <el-aside class="aside" width="200px">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item v-for="item in ChapNum" v-bind:key="item" @click="updateMindGraph(item - 1)">
          <span slot="title">Chapter {{ item }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="z-index: 1">
      <div id="myChart" :style="{ width: '1500px', height: '500px' }" />
      
    </el-main>
  </el-container>
</template>
  
  
  
  <script>
    
    export default {
      name: 'personal',
      mounted() {
        this.drawLine()
      },
      data() {
    return {
      drawer: true,
      direction: 'rtl',
      title: 'mytitle',

      courseName: 'python',
      index: 0,
      key: 0,
      ChapNum: 4
    }
  },
      methods: {
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          const myChart = this.$echarts.init(document.getElementById('myChart'))
myChart.setOption ({
  title:{text:'个人完成情况'},
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58, 'hardware'],
      [57.1, 78, 'four functions'],
      [74.4, 41, 'recipe'],
      [50.1, 12, 'aspects of language'],
      [89.7, 20, 'IDE tools'],
      [68.1, 79, 'fundamentals'],
      [19.6, 91, 'python operators'],
     
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Score', 'Low Score'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
});

},

    updateGraph(index) {
      this.key++;
      this.index = index;
    

  }
}
}

  </script>