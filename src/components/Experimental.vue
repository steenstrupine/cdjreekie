<template>
    <div>
        <div class="container pt-4 pb-2 my-4 border text-left" style="background-color:white; ">
            <h2>Tensorflow.js</h2>
            <a>The page below contains some experimental implementations of Tensorflow.js.</a>
        </div>
        <div class="last-content">
            <webcam v-if="!showWebcam"></webcam>
            <tensor v-if="!showTensor"></tensor>
        </div>
   </div>
</template>

<script>

import tensor from './Tensor.vue'
import webcam from './Webcam.vue'

  export default {
    components: {
         tensor,
         webcam
    },
    name: 'Hello',
    data () {
        return {
            showTensor: true,
            showWebcam: false
        }
    }
  }
</script>

<style>


.last-content{
  padding-bottom: 40px;
}

</style>