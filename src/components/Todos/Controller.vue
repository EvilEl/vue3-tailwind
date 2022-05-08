<template>
  <div class="flex flex-col items-end">
    <input
      class="border-2 px-4 bg-teal-300"
      type="text"
      v-model="sourceValue"
    />
    <button
      class="my-10 px-4 py-2 rounded-lg bg-teal-300 duration-75 hover:bg-teal-700 hover:text-white"
      @click="addTask"
    >
      Добавить Задача
    </button>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const sourceValue = computed({
      get() {
        return props.title;
      },
      set(newValue) {
        emit("update:title", newValue);
      },
    });
    function addTask() {
      emit("addTask");
    }
    return { sourceValue, addTask };
  },
};
</script>
<style></style>
