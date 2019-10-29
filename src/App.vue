<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="less">
#app {
  height: 100%
}
</style>
<script>
export default {
  name: 'App',
  mounted() {
    this.$setPageHeight();
  }
}

</script>
