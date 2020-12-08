<template>
  <div class="flex-container bg-secondary" >
     <div class="container m-5">
       <h1 class="text-white">Contacto</h1>
       <div class="saludo text-white">
          <p>¿Tienes dudas o sugerencias?.</p>
          <p>Déjame un mensaje y me contactaré contigo.</p>
       </div>
        <p>Nombre</p>
        <input class="form-control" type="text" placeholder="">
        <p>E.mail</p>
        <input class="form-control" type="text" placeholder="">
        <p>Teléfono</p>
        <input class="form-control" type="text" placeholder="">
        <div class="form-group">
           <label for="exampleFormControlTextarea1" class="text-white">Mensaje</label>
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
     </div>
    <div class=" ml-5">
      <img src="../assets/img/contact-bg.jpg" class="rounded float-right p-5"  width="100%" height="100%">
  </div>
      <router-view name="lazyloading"></router-view>
  </div>
</template>
<script>
export default {
  name: 'Contacto',
  
}
</script>
<style scoped>

.container{
  height: 80vh;

}
  .saludo{
    margin: 2px;
  }
 .flex-container{
      display:flex;
  }
  p{
    color: white;
  }
</style>
