<template>
  <TimerBtn @click="startCounter">
    <template v-slot:icon>
      <i class="fas fa-play"></i>
    </template>
    <template v-slot:text>
      <span>play</span>
    </template>
  </TimerBtn>
  <TimerBtn @click="stopCounter">
    <template v-slot:icon>
      <i class="fas fa-stop"></i>
    </template>
    <template v-slot:text>
      <span>stop</span>
    </template>
  </TimerBtn>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TimerBtn from './TimerBtn.vue';
export default defineComponent({
  name: "Timer",
  components: { TimerBtn },
  data() {
    return {
      timeInSeconds: 0,
      counter: 0,
    }
  },
  methods: {
    startCounter() {
      this.counter = setInterval(() => { this.timeInSeconds += 1 }, 1000);
    },
    stopCounter() {
      clearInterval(this.counter);
    },
  },
})
</script>
<style>
</style>