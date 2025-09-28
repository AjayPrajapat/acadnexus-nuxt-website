<template>
  <article class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <img :src="image" :alt="`${title} featured image`" class="h-48 w-full object-cover" loading="lazy" />
    <div class="flex flex-1 flex-col gap-4 p-6">
      <div class="space-y-2">
        <p class="text-xs font-medium uppercase tracking-wide text-primary">{{ formattedDate }}</p>
        <h3 class="text-xl font-semibold text-slate-900">
          <NuxtLink :to="`/blog/${slug}`" class="hover:text-primary">{{ title }}</NuxtLink>
        </h3>
        <p class="text-sm text-slate-600">{{ excerpt }}</p>
      </div>
      <div class="mt-auto">
        <NuxtLink
          :to="`/blog/${slug}`"
          class="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Read More
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
}>();

const formattedDate = computed(() => new Date(props.date).toLocaleDateString(undefined, {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}));
</script>
