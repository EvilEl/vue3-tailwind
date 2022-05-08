<template>
  <div class="pt-10 px-5 h-screen bg-orange-300">
    <Controller v-model:title="title" @addTask="addTask" />

    <div class="todos grid-cols-3 grid auto-cols-auto gap-4">
      <Card :options="openTask" @removeTodo="removeTodo" />
      <!-- <Card :options="done" @removeTodo="removeTodo" /> -->
      <!-- <Card :options="inProgress" @removeTodo="removeTodo" />  -->
    </div>
  </div>
</template>
<script>
import { reactive, computed, watch, ref } from "vue";
import todos from "@/data/todoList.ts";
import Todo from "@/services/Todo/todo.js";
import Card from "@/components/Todos/Card.vue";
import Controller from "../components/Todos/Controller.vue";
import uniqid from "uniqid";

export default {
  components: { Card, Controller },

  setup() {
    const title = ref();
    let getTodos = reactive(todos);
    const controllerTodos = new Todo(getTodos);
    const openTask = computed(() => {
      return controllerTodos.getTodo("open");
    });
    function removeTodo(idx) {
      console.log(idx);
      const findIndex = getTodos.findIndex((item) => item.id === idx);
      if (findIndex > -1) {
        getTodos.splice(findIndex, 1);
      }
    }
    function addTask() {
      getTodos.push({ title: title.value, id: uniqid(), status: "open" });
    }
    return { title, removeTodo, openTask, addTask };
  },
};
</script>
<style class="less"></style>
