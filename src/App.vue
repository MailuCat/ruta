<template>
    <div>
      <div id="nav">
          <NavBar/>
      </div>
    <router-view/>

     <p class="light bg-light mt-3 mb-0 text-center">Copyright © V8 - 2018</p>
    
  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue';
  export default {
    name: 'App',
    components: {
        NavBar
    }
}

</script>
<style scoped>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
  p{
    font-size: 0.7rem;
  }
</style>
