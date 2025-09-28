<template>
  <div class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary/80">FAQ</p>
        <h1 class="mt-4 text-4xl font-bold sm:text-5xl">Answers to common questions</h1>
        <p class="mt-4 text-base text-slate-200">
          Find clarity on programs, enrollment, and support. Need more help? Our team is one message away.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-4 py-16">
      <div class="space-y-4">
        <FAQItem v-for="item in faqs" :key="item.question" v-bind="item" />
      </div>
      <div class="mt-12 rounded-2xl bg-slate-900 px-6 py-8 text-white">
        <h2 class="text-2xl font-semibold">Still curious?</h2>
        <p class="mt-3 text-sm text-slate-200">
          Reach out to our learner success team and we’ll respond within two business days.
        </p>
        <NuxtLink
          to="/contact"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary transition hover:-translate-y-1 hover:bg-slate-100"
        >
          Contact us
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import FAQItem from '~/components/FAQItem.vue';
import { faqs } from '~/data/content';

const siteUrl = useRuntimeConfig().public.siteUrl;

useHead({
  title: 'FAQ',
  meta: [
    { name: 'description', content: 'Discover answers to frequently asked questions about AcadNexus programs, cohorts, and support.' },
    { property: 'og:title', content: 'AcadNexus FAQ' },
    { property: 'og:description', content: 'Get clarity on learning formats, corporate packages, and learner support services.' },
    { property: 'og:url', content: `${siteUrl}/faq` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/faq` }]
});
</script>
