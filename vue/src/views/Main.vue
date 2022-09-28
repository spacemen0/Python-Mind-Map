<template>
  <el-container>
    <el-aside class="aside" width="250px">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item v-for="(item,index) in ChapNum" @click="updateMindGraph(index + 1)">
          <span slot="title">Chapter {{index + 1}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="z-index: 1">
      <HelloWorld :index="index" :key="key"/>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Main',
  components: {
    HelloWorld,
  },
  data() {
    return {
      courseName: 'python',
      index: 0,
      key: 0,
      ChapNum: 4
    }
  },
  methods: {
    updateMindGraph(index) {
      this.key++;
      this.index = index - 1;
    }

  }
}
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
  height: 100vh;
}
</style>
