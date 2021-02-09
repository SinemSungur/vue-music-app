<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name:'app',
  components:{Navbar}

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 20px;
   list-style: none;
}
#app {
  background-color: rgb(39, 36, 36);
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
  color: greenyellow;
  text-shadow: 0 1px 1px honeydew;
}
</style>
