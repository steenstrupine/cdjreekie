<template>
    <div>
        <div class="container pt-4 pb-2 my-4 border text-left" style="background-color:white; ">
            <h2>Linear regression model</h2>
            <p style="text-align:justify">A very primitive LR model created using a sequential TF model. Simply enter an equal length list of X and Y variables and train the model (i.e, 1,2,3,4,5...). Singular predictions can then be made using PREDICT button. The model is currently set to train over 50 epochs.</p>
            <div>
                <div class="row"  style="padding-left: 18px;">
                    <input v-model="xInput" type="text" placeholder="Enter a list of X values..."><br>
                    <button class="btn3" v-on:click="print('xnum')">SET X</button>
                </div>
                <br>
                <div>
                    <p v-if="xValues.length == 0">Please enter a list of X variables...</p>
                    <p v-else>The X variables of length {{ xValues.length }} are: {{ xValues }}</p>
                </div>
            </div>
            <div>
                <div class="row"  style="padding-left: 18px;">
                    <input v-model="yInput" type="text" placeholder="Enter a list of Y values..."><br>
                    <button class="btn3" v-on:click="print('ynum')">SET Y</button>
                </div>
                <br>
                <div>
                    <p v-if="yValues.length == 0">Please enter a list of Y variables...</p>
                    <p v-else>The Y variables of length {{ yValues.length }} are: {{ yValues }}</p>
                </div>
            </div>
            <div>
                <button class="btn3" :disabled="arrayNull" v-on:click="train()">Click to train the model</button>
                <a v-if="arrayNull" style="padding-left: 10px; color: red">Either the arrays are of non-matching length or no data has been input!</a>
                <a v-if="training" style="padding-left: 10px; color: orange">...training...</a>
                <a v-if="trained" style="padding-left: 10px; color: green">Model trained!</a>
            </div>
            <br>
            <p>Enter an unknown X variable below and click predict to obtain a predicted Y value.</p>
            <div>
                <div class="row" style="padding-left: 18px;">
                    <input v-model="valueToPredict" type="float" placeholder="Enter a number..."><br>
                    <button :disabled="predictDisable" class="btn3" v-on:click="predict()">PREDICT</button>
                </div>
            </div>
            <br>
            <div class="element">{{ predictedValue }}</div>
            <br>
            <button class="btn4" :disabled="arrayNull" v-on:click="combineArray()">Toggle chart</button>
            <div id="chart" ref="scatterchart"></div>
        </div>
   </div>
</template>

<script>

import * as tf from '@tensorflow/tfjs'
import * as ApexCharts from 'apexcharts'

  export default {
    computed: {
        arrayNull: function () {
            if (this.xValues.length != this.yValues.length || this.xValues.length == 0 && this.yValues.length == 0) {
                return true
            }
            else {
                return false
            }
        },
        predictDisable: function () {
            if (this.trained == false || isNaN(this.valueToPredict)) {
                return true
            }
            else {
                return false
            }
        }
    },
    name: 'Hello',
    data () {
        return {
            chart: null,
            trained: false,
            training: false,
            xInput: [],
            yInput: [],
            xValues: [],
            yValues: [],
            combinedArray: [],
            predictedValue: 'Train the model to make predictions!',
            predictionFloat: '',
            valueToPredict: '',
            showChart: false
        }
    },
    methods: {
        combineArray() {
            console.log(this.model)
            this.showChart = !this.showChart;
            if (this.showChart == true) {
                this.combinedArray = [];
                for (var i=0; i<this.xValues.length && i<this.yValues.length; i++)
                    this.combinedArray[i] = [this.xValues[i], this.yValues[i]];
                this.chart = new ApexCharts(this.$refs.scatterchart, {
                    xaxis: {
                        title: {
                            text: 'X Variables'
                        }
                    },
                    yaxis: {
                        title: {
                            text: 'Y Variables'
                        }
                    },
                    chart: {
                        id: 'mychart',
                        type: 'scatter',
                    },
                    series: [{
                        name: 'TRAINING DATA',
                        data: this.combinedArray
                    },{
                        name: 'UNKNOWN DATA',
                        data: [[this.valueToPredict, this.predictionFloat]]
                    }]
                });
                this.chart.render()
            }
            else {
                this.chart.destroy()
            }
        },
        print(xy) {
            this.trained = false
            this.predictedValue = "Train the model to make predictions!"
            if (xy == 'xnum') {
                this.xInput = this.xInput.split(",").map(x=>+x)
                if (isNaN(this.xInput[0]) == true) {
                    alert("Please enter a valid comma-separated list.")
                    this.xInput = []
                    this.xValues = []
                }
                else {
                    this.xValues = []
                    this.xValues = this.xInput
                    this.xInput = []
                }
            }
            else if (xy == 'ynum') {
                this.yInput = this.yInput.split(",").map(x=>+x)
                if (isNaN(this.yInput[0]) == true) {
                    alert("Please enter a valid comma-separated list.")
                    this.yInput = []
                    this.yValues = []
                }
                else {
                    this.yValues = []
                    this.yValues = this.yInput
                    this.yInput = []
                }
            }
        },
        train() {
            this.trained = false;
            const model = this.model = tf.sequential();
            model.add(tf.layers.dense({units: 1, inputShape: [1]}));
            model.compile({loss: 'meanSquaredError', optimizer: 'sgd', metrics: ['accuracy']});
            const xs = tf.tensor2d(this.xValues, [this.xValues.length, 1]);
            const ys = tf.tensor2d(this.yValues, [this.yValues.length, 1]);
            this.training = true;
            model.fit(xs, ys, {epochs: 50}).then(info => {
                console.log("model trained")
                this.training = false;
                this.trained = true;
                this.predictedValue = 'Ready for making predictions';
                console.log('final accuracy', info.history.acc[99])
            });
        },
        predict() {
            this.valueToPredict = Number(this.valueToPredict)
            var prediction = this.model.predict(tf.tensor2d([this.valueToPredict], [1,1]));
            this.predictionFloat = parseFloat(prediction.dataSync()).toFixed(2)
            this.predictedValue = "The value predicted by the model is " + this.predictionFloat
            if (this.showChart) {
                this.chart.updateSeries([{name: 'TRAINING DATA',data: this.combinedArray},{name: 'UNKNOWN DATA',data: [[this.valueToPredict, this.predictionFloat]]}])
            }
        }
    }
  }
</script>

<style>

.btn3 {
  background: gray; /* Anything you want */
  color: white;
  border: 0px
}

.btn3:disabled {
  background: lightgray; /* Anything you want */
  color: white;
}

.btn4 {
  background: orange; /* Anything you want */
  color: white;
  border: 0px
}

.btn4:disabled {
  background: lightgray; /* Anything you want */
  color: white;
}

</style>