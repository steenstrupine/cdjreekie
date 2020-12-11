<template>
    <div class="topnav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Work</router-link>
    </div>
</template>

<script>
export default {
  name: 'topnavbar'
}
</script>

<style>

.topnav {
  background-color: #333;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a:active {
  background-color: #4CAF50;
  color: white;
}

</style>