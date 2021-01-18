<template>
  <div id="app">
    <topnavbar></topnavbar>
    <router-view/>
  </div>
</template>

<script>
import topnavbar from './components/topnavbar'


export default {
  components: {
    topnavbar
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body {
    background-color:lightgray;

}

</style>
