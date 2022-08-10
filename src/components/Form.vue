<template>
  <div class="box">
    <div class="column input-counter-box">
      <div
        class="column counter-area-btns"
        role="form"
        aria-label="Área para criação de novas tarefas"
      >
        <input
          type="text"
          class="input"
          placeholder="Digite uma tarefa para inciar."
          v-model="description"
        />
        <Timer @timerFinished="finishTask"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import Chronometer from "./Chronometer.vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "Form",
  
  components: {
    Chronometer,
    Timer,
  },

  emits: [
    "toSaveTasks",
  ],

  data() {
    return {
      description: '',
    }
  },

  methods: {
    finishTask(elapsedTime: number): void {
      this.$emit('toSaveTasks', {
        durationInSeconds: elapsedTime,
        description: this.description,
      })
      this.description = ""
    },
  },
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