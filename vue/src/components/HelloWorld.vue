<template>
  <div class="editContainer">
    <div class="mindMapContainer" id="mindMapContainer"></div>
  </div>
</template>

<script>
import MindMap from 'simple-mind-map'
import { getData, storeData, storeConfig } from '@/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      mindmapdata: null
    }
  },
  mounted() {
    this.getData()
    this.init()
  },
  methods:{
    getData() {
      let storeData = getData()
      this.mindMapData = storeData
    },
    init() {
      let { root, layout, theme, view } = this.mindMapData
      console.log("this.mindMapData",this.mindMapData)
      this.mindMap = new MindMap({
        el: document.getElementById('mindMapContainer'),
        data: root,
        layout: layout,
        theme: 'diyColor',
        themeConfig: theme.config,
        viewData: view,
        readonly: true
      })
      // this.mindMap.on('mousedown', (...args) => {
      //     console.log("鼠标按下")
      //     this.mindMap.setTheme('diyColor')
      //     console.log("this.mindMap.themeConfig",this.mindMap.themeConfig)
      //
      //   })
      // this.mindMap.on('node_mousedown', (data) => {
      //   console.log("nodemousedown  data",data)
      //   //console.log("nodemousedown datae",e)
      // });
      // this.mindMap.render()
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style lang="less" scoped>
  .editContainer {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  
    .mindMapContainer {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
    }
  }
  
  </style>