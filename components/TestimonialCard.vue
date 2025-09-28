<template>
  <figure class="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <blockquote class="text-sm text-slate-600">“{{ message }}”</blockquote>
    <figcaption class="mt-auto flex items-center gap-3">
      <img :src="avatar" :alt="`${name} avatar`" class="h-12 w-12 rounded-full object-cover" loading="lazy" />
      <div>
        <p class="text-base font-semibold text-slate-900">{{ name }}</p>
        <slot name="role" />
      </div>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  avatar: string;
  message: string;
}>();
</script>
