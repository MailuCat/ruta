<template>
    <div>
      <div id="nav">
          <NavBar/>
      </div>
      <transition name="fade">
    <router-view/>
      </transition>

     <p class="text-light bg-dark  mb-0 text-center">Copyright © V8 - 2018</p>
    
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
  .fade-enter-active,
.fade-leave-active, fade-enter{
  transition: opacity .5s ;
}

.fade-enter-from,.fade-leave-to {
  opacity: 0;
}
</style>
