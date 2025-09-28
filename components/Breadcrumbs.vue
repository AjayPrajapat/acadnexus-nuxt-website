<template>
  <nav aria-label="Breadcrumb" class="text-sm text-slate-600">
    <ol class="flex flex-wrap items-center gap-2">
      <li v-for="(item, index) in path" :key="item.href" class="flex items-center gap-2">
        <NuxtLink
          v-if="index !== path.length - 1"
          :to="item.href"
          class="text-slate-500 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="font-semibold text-slate-900" aria-current="page">{{ item.label }}</span>
        <span v-if="index !== path.length - 1" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  path: { label: string; href: string }[];
}>();
</script>
