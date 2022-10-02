<template>
  <div>
    <!--    头部-->
    <Header style="z-index: 2"/>
    <!--    主体-->
    <div style="display: flex; height: calc(94vh); overflow-y: hidden">
      <!--      内容-->
      <router-view style="flex: 1; "/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Layout",
  components: {
    Header
  }
}
</script>

<style scoped>

</style>