<template>
  <div v-if="post" class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-4xl px-4">
        <Breadcrumbs :path="breadcrumbs" class="text-slate-200" />
        <p class="mt-2 text-sm uppercase tracking-wide text-primary">{{ post.category }}</p>
        <h1 class="mt-4 text-4xl font-bold">{{ post.title }}</h1>
        <p class="mt-4 max-w-2xl text-base text-slate-200">{{ post.excerpt }}</p>
        <p class="mt-6 text-sm text-slate-300">By {{ post.author }} · {{ formattedDate }}</p>
      </div>
    </section>

    <article class="mx-auto max-w-3xl px-4 py-16">
      <img :src="post.image" :alt="`${post.title} illustration`" class="w-full rounded-3xl object-cover" loading="lazy" />
      <div class="prose prose-lg prose-slate mt-10 max-w-none">
        <p v-for="(paragraph, index) in post.content" :key="index">{{ paragraph }}</p>
      </div>
      <div class="mt-10 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6">
        <span class="text-sm font-semibold uppercase tracking-wide text-slate-500">Share</span>
        <a
          v-for="share in shareLinks"
          :key="share.label"
          :href="share.href"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
        >
          <component :is="share.icon" class="h-4 w-4" aria-hidden="true" />
          {{ share.label }}
        </a>
      </div>
    </article>
  </div>
  <NotFound v-else message="Blog post not found" />
</template>

<script setup lang="ts">
import { h } from 'vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import NotFound from '~/components/NotFound.vue';
import { blogPosts } from '~/data/content';

const route = useRoute();
const siteUrl = useRuntimeConfig().public.siteUrl;

const post = computed(() => blogPosts.find((post) => post.slug === route.params.slug));

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' });
}

const breadcrumbs = computed(() => [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: post.value?.title ?? 'Article', href: `/blog/${route.params.slug}` }
]);

const formattedDate = computed(() => new Date(post.value!.date).toLocaleDateString(undefined, {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}));

const shareLinks = computed(() => {
  const url = encodeURIComponent(`${siteUrl}/blog/${route.params.slug}`);
  const text = encodeURIComponent(post.value?.title ?? '');
  const LinkedInIcon = {
    render() {
      return h('svg', { class: 'h-4 w-4', fill: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', {
          d: 'M20.452 20.452h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.144.925-2.069 2.069-2.069 1.142 0 2.068.925 2.068 2.069 0 1.142-.926 2.068-2.068 2.068zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'
        })
      ]);
    }
  };

  const TwitterIcon = {
    render() {
      return h('svg', { class: 'h-4 w-4', fill: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', {
          d: 'M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.012-14.012 14.012A13.93 13.93 0 010 19.539a9.86 9.86 0 007.257-2.037 4.93 4.93 0 01-4.597-3.417 4.93 4.93 0 002.22-.085 4.926 4.926 0 01-3.95-4.828v-.062a4.89 4.89 0 002.23.616 4.924 4.924 0 01-1.523-6.573 13.978 13.978 0 0010.15 5.146 5.563 5.563 0 01-.123-1.126 4.926 4.926 0 018.517-3.367 9.72 9.72 0 003.127-1.195 4.92 4.92 0 01-2.165 2.724 9.868 9.868 0 002.828-.77 10.6 10.6 0 01-2.464 2.56z'
        })
      ]);
    }
  };

  const EmailIcon = {
    render() {
      return h('svg', { class: 'h-4 w-4', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 8l9 6 9-6' }),
        h('rect', { x: '3', y: '6', width: '18', height: '12', rx: '2' })
      ]);
    }
  };

  return [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, icon: LinkedInIcon },
    { label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`, icon: TwitterIcon },
    { label: 'Email', href: `mailto:?subject=${text}&body=${url}`, icon: EmailIcon }
  ];
});

useHead({
  title: post.value?.title ?? 'Blog',
  meta: [
    { name: 'description', content: post.value?.excerpt ?? '' },
    { property: 'og:title', content: post.value?.title ?? '' },
    { property: 'og:description', content: post.value?.excerpt ?? '' },
    { property: 'og:url', content: `${siteUrl}/blog/${route.params.slug}` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/blog/${route.params.slug}` }]
});
</script>
