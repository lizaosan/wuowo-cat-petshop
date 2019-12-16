<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  metaInfo: {
    title: '窩窩 ╳ 貓所在乎的 窩窩都知道',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  created () {
    console.log('目前使用的環境變數', process.env.VUE_APP_TESTING)
  }
}
</script>

<style lang="scss">
@import "./assets/all"; // 載入 assets 裡的 scss
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container{
  margin:0 auto;
}
</style>
