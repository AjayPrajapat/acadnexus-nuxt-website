<template>
  <div class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Breadcrumbs :path="breadcrumbs" class="text-slate-200" />
          <h1 class="mt-4 text-4xl font-bold">Courses</h1>
          <p class="mt-3 max-w-2xl text-base text-slate-200">
            Explore immersive programs designed to build critical skills through guided practice, coaching, and community.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16">
      <form class="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:grid-cols-4" @submit.prevent>
        <div>
          <label for="category" class="block text-xs font-semibold uppercase tracking-wide text-slate-500">Category</label>
          <select
            id="category"
            v-model="filters.category"
            class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">All</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        <div>
          <label for="level" class="block text-xs font-semibold uppercase tracking-wide text-slate-500">Level</label>
          <select
            id="level"
            v-model="filters.level"
            class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">All</option>
            <option v-for="level in levels" :key="level" :value="level">{{ level }}</option>
          </select>
        </div>
        <div>
          <label for="duration" class="block text-xs font-semibold uppercase tracking-wide text-slate-500">Duration</label>
          <select
            id="duration"
            v-model="filters.duration"
            class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">All</option>
            <option v-for="duration in durations" :key="duration" :value="duration">{{ duration }}</option>
          </select>
        </div>
        <div class="flex items-end justify-end">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
            @click="resetFilters"
          >
            Reset
          </button>
        </div>
      </form>

      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CourseCard
          v-for="course in filteredCourses"
          :key="course.slug"
          :title="course.title"
          :description="course.description"
          :image="course.image"
          :category="course.category"
          :duration="course.duration"
          :cta="`/courses/${course.slug}`"
        />
      </div>
      <p v-if="!filteredCourses.length" class="mt-12 text-center text-sm text-slate-500">
        No courses match your criteria. Try adjusting the filters.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import CourseCard from '~/components/CourseCard.vue';
import { courses } from '~/data/content';

const siteUrl = useRuntimeConfig().public.siteUrl;

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' }
];

const filters = reactive({
  category: '',
  level: '',
  duration: ''
});

const categories = [...new Set(courses.map((course) => course.category))];
const levels = [...new Set(courses.map((course) => course.level))];
const durations = [...new Set(courses.map((course) => course.duration))];

const filteredCourses = computed(() => {
  return courses.filter((course) => {
    const matchesCategory = filters.category ? course.category === filters.category : true;
    const matchesLevel = filters.level ? course.level === filters.level : true;
    const matchesDuration = filters.duration ? course.duration === filters.duration : true;
    return matchesCategory && matchesLevel && matchesDuration;
  });
});

const resetFilters = () => {
  filters.category = '';
  filters.level = '';
  filters.duration = '';
};

useHead({
  title: 'Courses',
  meta: [
    { name: 'description', content: 'Browse AcadNexus courses across AI, web development, data storytelling, and more.' },
    { property: 'og:title', content: 'AcadNexus Courses' },
    { property: 'og:description', content: 'Filter immersive programs by category, level, and duration to find your next learning sprint.' },
    { property: 'og:url', content: `${siteUrl}/courses` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/courses` }]
});
</script>
