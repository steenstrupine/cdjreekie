<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg">
        <div class="btn-group" role="group">
            <button class="btn btn-space" v-on:click="active('home')" :class="activeClass('home')">Home</button>
            <button class="btn btn-space" v-on:click="active('about')" :class="activeClass('about')">About</button>
            <button class="btn btn-space" v-on:click="active('work')" :class="activeClass('work')">Work</button>
            <button class="btn btn-space" v-on:click="active('experimental')" :class="activeClass('experimental')">Experimental</button>
        </div>
    </nav>
    <home v-if="isHome"></home>
    <about v-if="isAbout"></about>
    <work v-if="isWork"></work>
    <experimental v-if="isExperimental"></experimental>
    <footer class="footer">Website constructed with vue.js and hosted by Github pages. Updated 21/01/2021.</footer>
  </div>
</template>

<script>
import home from './components/Home'
import about from './components/About'
import work from './components/Work'
import experimental from './components/Experimental'

export default {
    data () {
        return {
            isHome: true,
            isAbout: false,
            isWork: false,
            isExperimental: false
        }
    },
    components: {
        home,
        about,
        work,
        experimental
    },
    name: 'app',
    methods: {
        active(name) {
            if (name == 'home') {
                return this.isHome = true, this.isAbout = false, this.isWork = false, this.isExperimental = false
            }
            else if (name == 'about') {
                return this.isHome = false, this.isAbout = true, this.isWork = false, this.isExperimental = false
            }
            else if (name == 'work') {
                return this.isHome = false, this.isAbout = false, this.isWork = true, this.isExperimental = false
            }
            else if (name == 'experimental') {
                return this.isHome = false, this.isAbout = false, this.isWork = false, this.isExperimental = true
            }
        },
        activeClass(names) {
            if (names == 'home' && this.isHome == true) {
                return 'active'
            }
            else if (names == 'about' && this.isAbout == true) {
                return 'active'
            }
            else if (names == 'work' && this.isWork == true) {
                return 'active'
            }
            else if (names == 'experimental' && this.isExperimental == true) {
                return 'active'
            }
        }
    }
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

html, body, form, main {
    height: 100vh !important;
    background-color: lightgray;
}
nav {
  background-color: #563d7c;
}

.btn-group {
  color: white;
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 0px
}

.btn:hover {
  background: lightgray; /* Anything you want */
  color: black;
  border: 0px;
  border-radius: 0px
}

.btn {
  background: #563d7c; /* Anything you want */
  color: white;
  border: 0px
}

.btn.active,
.btn:active {
  color: black;
  background-color: lightblue;
  border-radius: 0px;
  outline: none;
}

.btn-space {
    margin-right: 8px;
}

.footer {
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 5px;
  position: fixed;
  width: 100%;
  bottom: 0;
}

footer {
  background: #563d7c;
  color: white;
  text-align: left;
  font-size: small;
}

</style>
