<template>
  <main class="columns is-gapless is-multiline">
    <div class="column">
      <SideBarr/> 
    </div>
    <div class="column is-10">
      <Formulario/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBarr from './components/SideBarr.vue';
import Formulario from './components/Form.vue';


export default defineComponent({
    name: "App",
    components: { 
      SideBarr,
      Formulario,
    }
});
</script>

<style lang="scss">

</style>
