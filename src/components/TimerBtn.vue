<template>
  <button class="button">
    <span class="icon">
      <slot name="icon"></slot>
    </span>
    <slot name="text"></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "TimerBtn"

})
</script>
<style>
</style>