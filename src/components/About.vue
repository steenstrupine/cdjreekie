<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/callum.jpg">
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to about'
      }
    }
  }
</script>