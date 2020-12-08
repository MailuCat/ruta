<template>
  <div class="bg-secondary ">
     <div class="container  mb-10 ">
        <h1 class="text-white p-4 font-weight-bold " >Chevrolet presenta la totalmente nueva Blazer</h1>
        <h4 class="text-white p-0 font-weight-bold ">Llega como la primera SUV deportiva de la marca</h4>
      </div>
      <div class="mt-4">
      <img src="../assets/img/home-bg.jpg" class="img-responsive" width="100%" height="700vh">
      </div>
      <router-view name="lazyloading"></router-view>
    </div>
</template>
<script>

export default {
  name: 'Home',
}
</script>
<style scoped>
h1, h4{
  text-align: center;
}
</style>