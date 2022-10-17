<template>
    <div id="app">
        <!--<nav>-->
        <!--  <router-link to="/">Home</router-link>-->
        <!--  <router-link to="/about">About</router-link>-->
        <!--</nav>-->
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            isRouterAlive: true
        }
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(function () {
                this.isRouterAlive = true
            });
        }
    }
}

</script>

<style lang="less">
/deep/ .el-message__content {
    font-size: 22px;
}

html, body {
    margin: 0;
    padding: 0;
    background-color: #f0f2f5;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
