<template>
        <div class="container pt-4 pb-2 my-4 border text-left" style="background-color:white;">
            <h1>Welcome...</h1>
            <p>{{ msg }}</p>
        </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to the website of C.D.J Reekie. This site is work in progress but in the meantime please feel free to check out the "Experimental" section which contains some implementations of Tensorflow.js.',
        isHidden: false
      }
    }
  }
</script>

<style>



</style>