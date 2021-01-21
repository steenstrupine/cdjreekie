<template>
    <div>
        <div class="container pt-4 pb-2 my-4 border text-left" style="background-color:white; ">
            <div class="row">
                <div class="col-sm-4">
                    <img src="../assets/callum.jpg" class="rounded mx-auto d-block" style="max-width: 100%">
                </div>
                <div class="col-lg-8">
                    <h2>About me</h2>
                    <br>
                    <p style="text-align:justify">{{ about }}</p>
                    <br>
                    <p>I can be contacted at <a href="mailto:cdjreekie@gmail.com">cdjreekie@gmail.com</a>. A recent copy of my CV can be found <a href="#" @click="readFile()">here</a>.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
        return {
            about: "I started life as a geologist, gaining a undergraduate degree at the University of St. Andrews before undertaking a PhD in Earth Sciences at the University of Cambridge. Throughout my PhD I developed an interest in machine-learning which led me to an internship with Spectra Analytics, an AI start-up based in London. Following this internship I returned to Cambridge to finish my PhD in the middle of the Covid-19 pandemic. Following my PhD, I am in the midst of starting a data scientist/software developer position at NIHR BioRseource, a major health research programme. My main interests are NLP and computation linguistics, however I enjoy all aspects of data science, machine-learning and full-stack development. When I am not at my desk I am either found somehwere in the Scottish Highlands or gaming."
        }
    },
    methods: {
        readFile() {
            var pdf = './cv.pdf'
            window.open(pdf)
        }
    }
  }
</script>

<style>

.btn2 {
  background: orange; /* Anything you want */
  color: black;
  border: 0px;
  border-radius: 10px
}

</style>