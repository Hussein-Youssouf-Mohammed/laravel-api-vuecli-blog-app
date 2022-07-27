<template>
  <div id="app">
       <div class="container">
        <img alt="Vue logo" src="./assets/logo.png" width="40">
       <Navbar></Navbar>
       <router-view></router-view>
       </div>
  </div>
</template>

<script>

import Navbar from './components/navbar.vue'
export default {
  name: 'App',
  components: {
     Navbar
  }
}
</script>
<style>
   body {background: #f5f3ef;}
</style>