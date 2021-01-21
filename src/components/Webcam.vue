<template>
        <div id="CustomContainer" class="customContainer container pt-4 pb-2 my-4 border text-left" style="background-color:white; ">
            <h2>Face detection with face-api</h2>
            <p>Below is a simple face and mood detection model made with webcam-easy and face-api. The face-api module is built upon Tensorflow.js and can be used to detect faces and moods in either videos or static images. Refresh page to stop. Work in progress.</p>
            <div>
                <div class="video-container">
                    <video id="webcam" ref="webcam" autoplay muted playsinline width="640" height="480"></video>
                    <canvas id="canvas" ref="canvas" class="canvas"></canvas>
                </div>
                <div class="btn-toolbar">
                    <button class="btn2 mr-2" v-on:click="startWebcam">START</button>
                    <button class="btn2 mr-2" v-on:click="stopWebcam">STOP</button>
                    <button :disabled="!webcamStarted" class="btn2" v-on:click="faceDetect">DETECT</button>
                </div>
            </div>
       </div>
</template>

<script>

import Webcam from 'webcam-easy';
import * as faceapi from 'face-api.js'

  export default {
    name: 'Hello',
    data () {
        return {
            webcam: null,
            takenImage: null,
            faceDetection: null,
            canvas: null,
            webcamStarted: false,
        }
    },
    methods: {
        startWebcam() {
            this.webcamStarted = true;
            this.webcam = new Webcam(this.$refs.webcam, 'user', document.getElementById('canvas'))
            this.webcam.start().then(() => {
                console.log("webcam started")
                this.webcam.flip()
            }).catch(err => {
                console.log(err)
            });
        },
        stopWebcam() {
            this.webcam.stop()
            window.location.reload()
        },
        snapImage() {
            this.takenImage = this.webcam.snap()
            console.log("picture taken")
            var theimage = document.createElement("img")
            theimage.setAttribute('src', this.takenImage);
            theimage.height = 200;
            theimage.width = 200;
            const container = document.querySelector('.customContainer')
            container.appendChild(theimage);
        },
        faceDetect() {
            Promise.all([
                faceapi.nets.ssdMobilenetv1.load('/models'),
                faceapi.nets.tinyFaceDetector.load('./models'),
                faceapi.nets.faceLandmark68TinyNet.load('./models'),
                faceapi.nets.faceExpressionNet.load('./models')
            ]).then(() => {
                this.canvas = document.getElementById('canvas')
                this.canvas.width = this.$refs.webcam.width
                this.canvas.height = this.$refs.webcam.height
                this.startDetection()
            });
        },
        startDetection() {
            this.faceDetection = setInterval(async () => {
                const detections = await faceapi.detectAllFaces(this.$refs.webcam, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true).withFaceExpressions()
                const resizedDetections = faceapi.resizeResults(detections, { width: this.$refs.webcam.width, height: this.$refs.webcam.height })
                this.canvas.getContext('2d').clearRect(0, 0, this.$refs.webcam.width, this.$refs.webcam.height)
                faceapi.draw.drawDetections(this.canvas, resizedDetections)
                faceapi.draw.drawFaceLandmarks(this.canvas, resizedDetections)
                faceapi.draw.drawFaceExpressions(this.canvas, resizedDetections)
            });
        }
    }
  }
</script>

<style>

.btn2 {
    border-radius: 0px;
}

.btn2:disabled {
    background-color: lightgray;
    border-radius: 0px;
}

.video-container {
    position: relative;
}

canvas{
    position: absolute;
    z-index: 10;
    left: 0px;
    top: 0px;
}

video {
    background: url('../assets/overlay.png');
    background-position: center;
}

</style>