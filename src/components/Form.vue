<template>
  <div class="box">
    <div class="column input-counter-box">
      <div class="column counter-area-btns" role="form" aria-label="Área para criação de novas tarefas">
        <input type="text" class="input" placeholder="Digite uma tarefa para inciar." />
        <Chronometer :timeInSeconds="timeInSeconds"/>
        <button class="button" @click="startCounter">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
          <span>play</span>
        </button>
        <button class="button" @click="stopCounter">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
          <span>stop</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import Chronometer from "./Chronometer.vue";

export default defineComponent({
    name: "Formulario",
    data() {
        return {
            timeInSeconds: 0,
            counter: 0
        };
    },
    methods: {
        startCounter() {
            this.counter = setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
        },
        stopCounter() {
            clearInterval(this.counter);
        },
    },
    components: { Chronometer }
})

</script>

<style>
.input-counter-box,
.counter-area-btns {
  padding: 0px !important;
}

.counter-area-btns {
  display: inline-flex;
  gap: 1.5em;
}

.input {
  width: 30rem
}

section {
  align-items: center;
  justify-items: center;
  display: flex;
  font-size: x-large;
}

</style>