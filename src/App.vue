<template>
  <main class="columns is-gapless is-multiline dark-mode">
    <div class="column">
      <SideBarr />
    </div>
    <div class="column is-10 div-content">
      <Form @toSaveTasks="saveTasks" />
      <div class="list">
        <Task v-for="(task, index) in tasks"
          :key="index"
          :task="task"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBarr from './components/SideBarr.vue';
import Form from './components/Form.vue';
import Task from './components/Task.vue';
import ITask from './interfaces/ITask';

export default defineComponent({
  name: "App",

  components: {
    SideBarr,
    Form,
    Task,
  },

  data() {
    return {
      tasks: [] as ITask[]
    }
  },

  methods: {
    saveTasks(task: ITask) {
      this.tasks.push(task)
    }
  },
});
</script>

<style>
main {
  height: 100vh;
}

.list {
  padding: 1.25rem;
}
</style>
