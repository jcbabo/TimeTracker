<template>
  <div class="box">
    <div class="columns">
      <div class="column is-7">{{ task.description }}</div>
      <div class="column">
        <Chronometer
          :timeInSeconds="task.durationInSeconds"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Chronometer from "./Chronometer.vue";
import ITask from "../interfaces/ITask";

export default defineComponent({
  name: "TaskDescription",
  components: { Chronometer },

  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    }
  }
})
</script>

<style scoped>

.box {
  font-weight: bold;
  background: #e2c395;
  color: #9d403b;
}
</style>