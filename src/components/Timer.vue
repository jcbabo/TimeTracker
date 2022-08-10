<template>
  <Chronometer
    :timeInSeconds="timeInSeconds"
    :class="{ textStyle: true }"
  />
  <TimerBtn
    @click="startCounter"
    :disabled="timeRunning"
  >
    <template v-slot:icon>
      <i class="fas fa-play"></i>
    </template>
    <template v-slot:text>
      <span>play</span>
    </template>
  </TimerBtn>
  <TimerBtn
    @click="pauseConter"
    :disabled="!timeRunning"
  >
    <template v-slot:icon>
      <i class="fas fa-pause"></i>
    </template>
    <template v-slot:text>
      <span>pause</span>
    </template>
  </TimerBtn>
  <TimerBtn
    @click="stopCounter"
    :disabled="!timeRunning"
  >
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
import Chronometer from './Chronometer.vue';

export default defineComponent({
  name: "Timer",

  components: {
    TimerBtn,
    Chronometer
  },
  emits: [
    'timerFinished'
  ],

  data() {
    return {
      timeInSeconds: 0,
      counter: 0,
      timeRunning: false,
    }
  },
  
  methods: {
    startCounter() {
      this.counter = setInterval(() => { this.timeInSeconds += 1 }, 1000);
      this.timeRunning = true;
    },
  
    pauseConter() {
      clearInterval(this.counter);
      this.timeRunning = false;
    },
    
    stopCounter() {
      clearInterval(this.counter);
      this.timeRunning = false;
      this.$emit('timerFinished', this.timeInSeconds)
      this.timeInSeconds = 0
    },
  },
})
</script>
<style>
.textStyle {
  color: #FF0000 ;
  font-weight: 700;
  font-size: 1.5rem !important;
}
</style>