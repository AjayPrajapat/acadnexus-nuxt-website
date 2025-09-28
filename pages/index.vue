<template>
  <div>
    <HeroSection
      title="Reimagine Learning with AcadNexus"
      subtitle="Accelerate your career with industry-aligned programs, world-class mentors, and an active community of innovators."
      cta-text="Join the Community"
      cta-link="/contact"
    />

    <section class="mx-auto max-w-7xl px-4 py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary">Why AcadNexus</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Learning designed for impact</h2>
        <p class="mt-4 text-base text-slate-600">
          Our platform blends human expertise with smart technology to unlock meaningful outcomes for learners and organizations.
        </p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard v-for="feature in features" :key="feature.title" v-bind="feature" />
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-primary">Latest Courses</p>
            <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Build job-ready skills faster</h2>
            <p class="mt-4 max-w-2xl text-base text-slate-600">
              Curated programs with guided pathways, real-world projects, and support designed to help you apply new skills immediately.
            </p>
          </div>
          <NuxtLink
            to="/courses"
            class="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            View all courses
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <CourseCard
            v-for="course in courses.slice(0, 3)"
            :key="course.slug"
            :title="course.title"
            :description="course.description"
            :image="course.image"
            :category="course.category"
            :duration="course.duration"
            :cta="`/courses/${course.slug}`"
          />
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-20">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary">Learner Stories</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by teams and professionals worldwide</h2>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :name="testimonial.name"
          :avatar="testimonial.avatar"
          :message="testimonial.message"
        >
          <template #role>
            <p class="text-xs text-slate-500">{{ testimonial.role }}</p>
          </template>
        </TestimonialCard>
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-primary">From the Blog</p>
            <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Insights to power your learning strategy</h2>
          </div>
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            Explore all posts
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <BlogCard v-for="post in blogPosts.slice(0, 2)" :key="post.slug" v-bind="post" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';
import HeroSection from '~/components/HeroSection.vue';
import FeatureCard from '~/components/FeatureCard.vue';
import CourseCard from '~/components/CourseCard.vue';
import TestimonialCard from '~/components/TestimonialCard.vue';
import BlogCard from '~/components/BlogCard.vue';
import { courses, blogPosts, testimonials } from '~/data/content';

const LightningIcon = {
  render() {
    return h('svg', { class: 'h-6 w-6', fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('path', { d: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z', 'fill-rule': 'evenodd', 'clip-rule': 'evenodd' })
    ]);
  }
};

const CompassIcon = {
  render() {
    return h('svg', { class: 'h-6 w-6', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M10.5 6.75L6.75 17.25l10.5-3.75L13.5 6.75l-3 4.5z' }),
      h('circle', { cx: '12', cy: '12', r: '9' })
    ]);
  }
};

const ShieldIcon = {
  render() {
    return h('svg', { class: 'h-6 w-6', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 3l7.5 4.5v4.5c0 5-3.5 9.5-7.5 9.5S4.5 17 4.5 12V7.5L12 3z' })
    ]);
  }
};

const SparkleIcon = {
  render() {
    return h('svg', { class: 'h-6 w-6', fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 2l1.8 4.6L18 8.4l-4.2 1.8L12 15l-1.8-4.8L6 8.4l4.2-1.8L12 2zM5 18l.9-2.1L8 15l-2.1-.9L5 12l-.9 2.1L2 15l2.1.9L5 18zm12 0l.9-2.1L20 15l-2.1-.9L17 12l-.9 2.1L14 15l2.1.9L17 18z' })
    ]);
  }
};

const features = [
  {
    icon: LightningIcon,
    title: 'Immersive Learning Sprints',
    description: 'Accelerated cohorts combine live workshops, labs, and peer review to help you apply knowledge immediately.'
  },
  {
    icon: CompassIcon,
    title: 'Personalized Pathways',
    description: 'Adaptive pathways and mentor check-ins keep your learning aligned with goals and performance metrics.'
  },
  {
    icon: ShieldIcon,
    title: 'Enterprise-Grade Governance',
    description: 'Security, compliance, and analytics dashboards ensure leaders can scale learning responsibly.'
  },
  {
    icon: SparkleIcon,
    title: 'Community That Inspires',
    description: 'Join a global network of professionals sharing insights, resources, and opportunities every day.'
  }
];

useHead({
  title: 'AcadNexus | Learning reimagined',
  meta: [
    { name: 'description', content: 'Discover AcadNexus: immersive EdTech programs, strategic upskilling, and resources for the future of work.' },
    { property: 'og:title', content: 'AcadNexus — Learning reimagined' },
    { property: 'og:description', content: 'Explore experiential courses, expert mentors, and insights powering tomorrow\'s teams.' },
    { property: 'og:url', content: `${useRuntimeConfig().public.siteUrl}` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}` }]
});
</script>
