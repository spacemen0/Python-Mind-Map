<template>
    <div id="myChart" :style="{ width: '500px', height: '300px' }" />
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
myChart.setOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['True', 'False']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'value'
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['Unit7', 'Unit6', 'Unit5', 'Unit4', 'Unit3', 'Unit2', 'Unit1']
    }
  ],
  series: [
    
    {
      name: 'True',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [32, 12, 41, 34, 30, 40, 20]
    },
    {
      name: 'False',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'left'
      },
      emphasis: {
        focus: 'series'
      },
      data: [-20, -32, -11, -34, -19, -23, -20]
    }
  ]
};

}
}
}

  </script>