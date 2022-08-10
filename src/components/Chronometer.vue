<template>
  <section>
    {{ elapsedTime }}
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Chronometer",
  props: {
    timeInSeconds: {
      type: Number,
      default: 0
    },
  },

  computed: {
    elapsedTime(): string {
      return new Date(this.timeInSeconds * 1000).toISOString().substring(11, 19)
    },
  },
})
</script>
<style scoped>
section {
  font-size: 1rem;
}
</style>