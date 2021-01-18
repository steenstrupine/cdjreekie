<template>
    <nav class="navbar navbar-expand-sm bg">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/cdjreekie" :class="activeClass('home')">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/cdjreekie/about" :class="activeClass('about')">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/cdjreekie/work" :class="activeClass('work')">Work</router-link>
            </li>
         </ul>
    </nav>
</template>

<script>
export default {
    name: 'topnavbar',
    methods: {
        activeClass: function (...names) {
            console.log(this.$route.name)
            for (let name of names) {
                if (name == this.$route.name)
                return 'active';
            }
        }
    }
}
</script>

<style>

nav {
  background-color: #563d7c;
}

a.nav-link {
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

nav a:hover {
  background: lightgray; /* Anything you want */
  color: black
}

nav .router-link-exact-active {
    background: lightblue;
    color: black
}

</style>