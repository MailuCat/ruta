<template>
  <div class="flex-container">
     <div class="container m-5">
       <h1>Contacto</h1>
       <div class="saludo">
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
           <label for="exampleFormControlTextarea1">Mensaje</label>
           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
     </div>
    <div class=" ml-5">
      <img src="../assets/img/contact-bg.jpg" class="border-box"  width="100%" height="600">
  </div>
  </div>
</template>
<script>
export default {
  name: 'Contacto',
  
}
</script>
<style scoped>
  .saludo{
    margin: 2px;
  }
 .flex-container{
      display:flex;

  }
</style>
