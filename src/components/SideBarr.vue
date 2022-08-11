<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="">
    </h1>
  </header>
</template>
<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBarr"
});

</script>
<style>
header {
  padding: 1rem;
  background: #222629;
  min-height: 100%;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

img {
  max-width: 100px;
}
</style>