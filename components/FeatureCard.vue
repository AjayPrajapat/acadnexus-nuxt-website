<template>
  <div class="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <component :is="icon" class="h-6 w-6" aria-hidden="true" />
    </div>
    <div>
      <h3 class="text-lg font-semibold text-slate-900">{{ title }}</h3>
      <p class="mt-2 text-sm text-slate-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: any;
  title: string;
  description: string;
}>();
</script>
