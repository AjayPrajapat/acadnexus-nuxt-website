<template>
  <div class="bg-white">
    <NotFound message="We can’t find the page you’re looking for." />
  </div>
</template>

<script setup lang="ts">
import NotFound from '~/components/NotFound.vue';

const siteUrl = useRuntimeConfig().public.siteUrl;

useHead({
  title: 'Page not found',
  meta: [
    { name: 'robots', content: 'noindex' },
    { property: 'og:title', content: 'Page not found' },
    { property: 'og:url', content: `${siteUrl}/404` }
  ]
});
</script>
