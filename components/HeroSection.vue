<template>
  <section class="relative overflow-hidden bg-slate-900 py-24 text-white">
    <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-slate-900 opacity-80"></div>
    <div class="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 text-center md:flex-row md:text-left">
      <div class="space-y-6 md:w-1/2">
        <p class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide">
          Empowering Lifelong Learners
        </p>
        <h1 class="text-4xl font-bold sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="max-w-xl text-lg text-slate-200">
          {{ subtitle }}
        </p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            :to="ctaLink"
            class="rounded-full bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg transition hover:-translate-y-1 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {{ ctaText }}
          </NuxtLink>
          <NuxtLink
            to="/courses"
            class="rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Browse Courses
          </NuxtLink>
        </div>
      </div>
      <div class="md:w-1/2">
        <img
          src="/images/hero-illustration.svg"
          alt="Learners collaborating online"
          class="mx-auto w-full max-w-xl"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}>();
</script>
