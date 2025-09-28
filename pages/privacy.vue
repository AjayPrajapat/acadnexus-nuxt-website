<template>
  <div class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary/80">Privacy Policy</p>
        <h1 class="mt-4 text-4xl font-bold sm:text-5xl">How we protect your data</h1>
        <p class="mt-4 text-base text-slate-200">
          We are committed to safeguarding personal information and maintaining transparent data practices.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-4 py-16">
      <StaticContent>
        <h2>1. Information We Collect</h2>
        <p>
          AcadNexus collects account details, learning activity, and engagement analytics to personalize your experience and improve our services.
        </p>
        <h2>2. How We Use Information</h2>
        <p>
          Data helps us deliver courses, communicate updates, and provide support. We may aggregate anonymized insights for research and product development.
        </p>
        <h2>3. Data Sharing</h2>
        <p>
          We do not sell personal data. Limited sharing occurs with trusted service providers who support learning delivery under strict confidentiality.
        </p>
        <h2>4. Security</h2>
        <p>
          We implement technical and organizational safeguards, including encryption, access controls, and monitoring, to protect data integrity.
        </p>
        <h2>5. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of personal data at any time by contacting privacy@acadnexus.com.
        </p>
      </StaticContent>
    </section>
  </div>
</template>

<script setup lang="ts">
import StaticContent from '~/components/StaticContent.vue';

const siteUrl = useRuntimeConfig().public.siteUrl;

useHead({
  title: 'Privacy Policy',
  meta: [
    { name: 'description', content: 'Understand AcadNexus privacy practices, data usage, and how to exercise your rights.' },
    { property: 'og:title', content: 'AcadNexus Privacy Policy' },
    { property: 'og:description', content: 'Learn about our commitment to safeguarding learner and partner information.' },
    { property: 'og:url', content: `${siteUrl}/privacy` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/privacy` }]
});
</script>
