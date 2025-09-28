<template>
  <article class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <img :src="image" :alt="`${title} cover image`" class="h-48 w-full object-cover" loading="lazy" />
    <div class="flex flex-1 flex-col gap-4 p-6">
      <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-primary">
        <span>{{ category }}</span>
        <span>{{ duration }}</span>
      </div>
      <div class="space-y-3">
        <h3 class="text-xl font-semibold text-slate-900">
          <NuxtLink :to="cta" class="hover:text-primary">{{ title }}</NuxtLink>
        </h3>
        <p class="text-sm text-slate-600">{{ description }}</p>
      </div>
      <div class="mt-auto">
        <NuxtLink
          :to="cta"
          class="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Explore Course
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  cta: string;
}>();
</script>
