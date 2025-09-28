<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <button
      class="flex w-full items-center justify-between text-left text-base font-semibold text-slate-900"
      @click="isOpen = !isOpen"
      :aria-expanded="isOpen"
    >
      {{ question }}
      <span class="ml-4 text-primary">{{ isOpen ? '-' : '+' }}</span>
    </button>
    <transition name="collapse">
      <p v-if="isOpen" class="mt-4 text-sm text-slate-600">
        {{ answer }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  question: string;
  answer: string;
}>();

const isOpen = ref(false);
</script>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.2s ease;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
