<template>
  <div class="box">
    <div class="column input-counter-box">
      <div class="column counter-area-btns" role="form" aria-label="Área para criação de novas tarefas">
        <input type="text" class="input" placeholder="Digite uma tarefa para inciar." />
        <Timer />
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import Chronometer from "./Chronometer.vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "Formulario",
  components: { Chronometer, Timer },
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