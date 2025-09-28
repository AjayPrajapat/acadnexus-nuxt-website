<template>
  <div class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-6xl px-4">
        <Breadcrumbs :path="breadcrumbs" class="text-slate-200" />
        <h1 class="mt-4 text-4xl font-bold">Insights & Resources</h1>
        <p class="mt-4 max-w-2xl text-base text-slate-200">
          Explore analysis, best practices, and stories from the AcadNexus community to inform your learning strategy.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16">
      <form class="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between" @submit.prevent>
        <div>
          <label for="category" class="block text-xs font-semibold uppercase tracking-wide text-slate-500">Category</label>
          <select
            id="category"
            v-model="selectedCategory"
            class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">All</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
          @click="selectedCategory = ''"
        >
          Clear Filter
        </button>
      </form>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <BlogCard v-for="post in filteredPosts" :key="post.slug" v-bind="post" />
      </div>
      <p v-if="!filteredPosts.length" class="mt-12 text-center text-sm text-slate-500">No articles match this category yet.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import BlogCard from '~/components/BlogCard.vue';
import { blogPosts } from '~/data/content';

const siteUrl = useRuntimeConfig().public.siteUrl;

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' }
];

const categories = [...new Set(blogPosts.map((post) => post.category))];
const selectedCategory = ref('');

const filteredPosts = computed(() => {
  if (!selectedCategory.value) return blogPosts;
  return blogPosts.filter((post) => post.category === selectedCategory.value);
});

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Stay ahead with AcadNexus thought leadership on AI, learning design, and the future of work.' },
    { property: 'og:title', content: 'AcadNexus Blog' },
    { property: 'og:description', content: 'Articles, guides, and perspectives from AcadNexus experts and alumni.' },
    { property: 'og:url', content: `${siteUrl}/blog` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/blog` }]
});
</script>
