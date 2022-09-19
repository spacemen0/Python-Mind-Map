<template>
  <el-container>
    <el-aside class="aside" >{{courseName}}</el-aside>
    <el-main style="z-index: 1">
      <HelloWorld />
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
      courseName: 'python'
    }
  }
}
</script>
<style scoped>
  .aside {
    padding-top: 2%;
    width: 8%;
    z-index: 2;
    font-size: 45px;
    color: lightgray;
  }
</style>
