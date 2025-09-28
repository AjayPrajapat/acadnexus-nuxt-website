<template>
  <section class="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-primary">Error 404</p>
    <h1 class="text-4xl font-bold text-slate-900">{{ message }}</h1>
    <p class="text-base text-slate-600">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <div class="flex flex-col gap-3 sm:flex-row">
      <NuxtLink
        to="/"
        class="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Back to Home
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Contact Support
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    message?: string;
  }>(),
  {
    message: 'Page not found'
  }
);
</script>
