<template>
  <div id="myChart" :style="{ width: '100px', height: '500px' }" />
</template>



<script>
  export default {
    mounted() {
      this.drawLine()
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [30, 2,22, 15, 19, 13, 13],
              type: 'line',
              smooth: true
            }
          ]
        })

      }
    }
  }
</script>
