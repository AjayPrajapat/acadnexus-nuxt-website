<template>
  <div v-if="course" class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-5xl px-4">
        <Breadcrumbs :path="breadcrumbs" class="text-slate-200" />
        <h1 class="mt-4 text-4xl font-bold">{{ course.title }}</h1>
        <p class="mt-4 max-w-3xl text-base text-slate-200">{{ course.description }}</p>
        <div class="mt-6 flex flex-wrap gap-4 text-sm">
          <span class="rounded-full bg-white/10 px-4 py-1">Category: {{ course.category }}</span>
          <span class="rounded-full bg-white/10 px-4 py-1">Level: {{ course.level }}</span>
          <span class="rounded-full bg-white/10 px-4 py-1">Duration: {{ course.duration }}</span>
        </div>
        <NuxtLink
          to="/contact"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-1 hover:bg-slate-100"
        >
          Enroll Now
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-16">
      <div class="grid gap-12 md:grid-cols-[2fr,1fr]">
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-semibold text-slate-900">What you'll learn</h2>
            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li v-for="topic in course.syllabus" :key="topic" class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2 w-2 rounded-full bg-primary"></span>
                <span>{{ topic }}</span>
              </li>
            </ul>
          </div>
        </div>
        <aside class="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div>
            <h3 class="text-lg font-semibold text-slate-900">Course Snapshot</h3>
            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li><strong>Format:</strong> Live workshops + async labs</li>
              <li><strong>Effort:</strong> 4-6 hrs per week</li>
              <li><strong>Tools:</strong> Collaborative workspaces, analytics dashboards</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-slate-900">Instructor</h3>
            <div class="mt-4 flex items-start gap-4">
              <img :src="course.instructorImage" :alt="`${course.instructor.name} portrait`" class="h-16 w-16 rounded-full object-cover" loading="lazy" />
              <div>
                <p class="text-base font-semibold text-slate-900">{{ course.instructor.name }}</p>
                <p class="text-xs text-slate-500">{{ course.instructor.role }}</p>
                <p class="mt-3 text-sm text-slate-600">{{ course.instructor.bio }}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
  <NotFound v-else message="Course not found" />
</template>

<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import NotFound from '~/components/NotFound.vue';
import { courses } from '~/data/content';

const route = useRoute();
const siteUrl = useRuntimeConfig().public.siteUrl;

const instructorAvatars: Record<string, string> = {
  'Dr. Aisha Patel': '/images/testimonials/jordan.svg',
  'Miguel Santos': '/images/testimonials/alex.svg',
  'Sophia Chen': '/images/testimonials/priya.svg'
};

const course = computed(() => {
  return courses
    .map((course) => ({
      ...course,
      instructorImage: instructorAvatars[course.instructor.name] ?? '/images/testimonials/jordan.svg'
    }))
    .find((course) => course.slug === route.params.slug);
});

if (!course.value) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found' });
}

const breadcrumbs = computed(() => [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: course.value?.title ?? 'Course', href: `/courses/${route.params.slug}` }
]);

useHead({
  title: course.value?.title ?? 'Course',
  meta: [
    { name: 'description', content: course.value?.description ?? '' },
    { property: 'og:title', content: course.value?.title ?? '' },
    { property: 'og:description', content: course.value?.description ?? '' },
    { property: 'og:url', content: `${siteUrl}/courses/${route.params.slug}` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/courses/${route.params.slug}` }]
});
</script>
