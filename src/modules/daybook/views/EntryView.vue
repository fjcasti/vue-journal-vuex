<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fw-bold fs-3">15</span>
            <span class="mx-1 fs-3">julio</span>
            <span class="mx-2 fs-4 fw-light">2021, jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir Foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué suceció hoy?"></textarea>
    </div>

    <Fab icon="fa-save"/>

    <img src="https://images.freeimages.com/images/large-previews/12d/frangipani-02-1311438.jpg" 
         alt="Entry-picture"
         class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components: { 
      Fab: defineAsyncComponent( ()=> import('../components/Fab.vue'))
  
  },

}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;

    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>