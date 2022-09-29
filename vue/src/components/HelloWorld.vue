<template>
  <div>
    <div class="editContainer">
      <div class="mindMapContainer" id="mindMapContainer"></div>
      <mindmap height="50" width="50%"></mindmap>
    </div>
    <el-drawer
        id="drawer"
        title=""
        :visible.sync="drawer"
        direction="rtl"
        :modal="false"
        :modal-append-to-body="false"
        size="20%">
      <span slot="title" style="font-size: 30px; color:  #cccccc">{{ title }}</span>
      <div class="pdfLink">
        <router-link rel="external nofollow" target="_blank" :to="pdfLink">pdf</router-link>
      </div>
    </el-drawer>

  </div>
</template>
<script>
import MindMap from 'simple-mind-map'
import {getData, storeData, storeConfig} from '@/api'

export default {
  name: 'HelloWorld',
  props: ['index'],
  data() {
    return {
      mindmapdata: null,


      pdfLink: "/Ch3_loop.pdf",
      drawer: false,
      direction: 'rtl',
      title: ''
    }
  },
  mounted() {
    this.getData()
    this.init()
  },
  methods: {
    getData() {
      let storeData = getData();
      this.mindMapData = storeData.python_trees[this.$props.index];
    },
    init() {
      let {root, layout, theme, view} = this.mindMapData;
      this.mindMap = new MindMap({
        el: document.getElementById('mindMapContainer'),
        data: root,
        layout: layout,
        theme: 'diyColor',
        themeConfig: theme.config,
        viewData: view,
        readonly: true
      });
      let themeConfig = this.mindMap.getCustomThemeConfig();
      themeConfig.backgroundColor = '#2f2f32';
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
      this.mindMap.on('node_click', (data) => {
        if (data.ableToClick === true) {
          this.drawer = true;
          let pointText = data.nodeData.data.text;
          this.title = pointText;


          console.log("node_click", data);
        }
      });
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
.pdfLink {
  padding-left: 50px;
  color: #42b983;
  font-size: 30px;
}

.pdfLink > a {
  text-decoration: none;
}

/deep/ .el-drawer.rtl {
  border-radius: 20px;
  background-color: #39393c;
  width: 20%;
}

#drawer {
  top: 70px;
  bottom: 7px;
}

.courseName {
  position: relative;
  top: 5%;
  left: 5%;
  font-size: 40px;
}

.editContainer {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #2c3e50;

  .mindMapContainer {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
}

</style>