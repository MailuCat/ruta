<template>
   <div class="container-fluid bg-secondary">
        <img src="../assets/img/post-sample-image.jpg" class="rounded-circle m-5 img-fluid mx-auto">
        <Postuno/>
   </div>
</template>
<script>
import Postuno from '@/components/Postuno.vue';
    export default {
            name: 'Post',
            components: {
                    Postuno
            }
    }
         
        
</script>
<style>
.container-fluid{
    text-align: center;
    height: 100%;
}
</style>