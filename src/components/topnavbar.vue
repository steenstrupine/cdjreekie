<template>
    <div class="topnav">
        <router-link to="/cdjreekie/">Home</router-link>
        <router-link to="/cdjreekie/about">About</router-link>
        <router-link to="/cdjreekie/work">Work</router-link>
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
  background: #29abe2;
  border-radius: 5px;
  color: #fff;
}

</style>