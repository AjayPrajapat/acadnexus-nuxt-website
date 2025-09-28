<template>
  <div class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary/80">Terms of Service</p>
        <h1 class="mt-4 text-4xl font-bold sm:text-5xl">AcadNexus Terms</h1>
        <p class="mt-4 text-base text-slate-200">
          Review the terms governing your use of AcadNexus services, courses, and community platforms.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-4 py-16">
      <StaticContent>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing AcadNexus, you agree to these Terms of Service and any additional guidelines presented during enrollment or platform use.
        </p>
        <h2>2. Use of Services</h2>
        <p>
          AcadNexus content is provided for personal or organizational learning. Redistribution, resale, or unauthorized recording of sessions is prohibited.
        </p>
        <h2>3. Payment & Refunds</h2>
        <p>
          Payments are due upon registration. Refunds may be issued according to the cancellation policy specified for each program.
        </p>
        <h2>4. Intellectual Property</h2>
        <p>
          All content, branding, and materials are owned by AcadNexus or our partners. You receive a limited license for your learning experience.
        </p>
        <h2>5. Conduct</h2>
        <p>
          We foster inclusive, respectful communities. AcadNexus reserves the right to remove access for behavior that violates our Code of Conduct.
        </p>
      </StaticContent>
    </section>
  </div>
</template>

<script setup lang="ts">
import StaticContent from '~/components/StaticContent.vue';

const siteUrl = useRuntimeConfig().public.siteUrl;

useHead({
  title: 'Terms of Service',
  meta: [
    { name: 'description', content: 'Read the legal terms and acceptable use guidelines for AcadNexus courses and services.' },
    { property: 'og:title', content: 'AcadNexus Terms of Service' },
    { property: 'og:description', content: 'Understand the agreements that govern participation in AcadNexus learning experiences.' },
    { property: 'og:url', content: `${siteUrl}/terms` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/terms` }]
});
</script>
