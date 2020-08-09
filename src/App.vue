<template>
  <div id="app">
    <Sidebar />
    <CoverLetter />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import CoverLetter from './components/CoverLetter.vue'
export default {
  components: {
    Sidebar,
    CoverLetter
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
}
</style>
