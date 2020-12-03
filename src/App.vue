<template>
    <div>
      <div id="nav">
          <NavBar/>
      </div>
    <router-view/>
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
<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;

}
</style>
