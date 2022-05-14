<template>
  <div class="grid gap-y-10">
    <transition-group mode="out-in" name="todo-fade" appear>
      <aricle
        class="self-start p-10 todo-card border-solid border-2 border-slate-900 relative"
        v-for="option in options"
        :key="option.title"
        @click="removeTodo(option.id)"
      >
        <button class="w-10 absolute right-2 top-2">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </button>
        <h2 class="text-3xl text-sky-600">{{ option.title }}</h2>
      </aricle>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    function removeTodo(idx) {
      emit("removeTodo", idx);
    }
    return {
      removeTodo,
    };
  },
};
</script>
<style lang="scss">
.todo-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.todo-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.todo-fade-enter-active,
.todo-fade-leave-active {
  transition: all 0.5s ease;
}
</style>
