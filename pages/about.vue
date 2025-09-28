<template>
  <div class="bg-white">
    <section class="bg-slate-900 py-20 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary/80">About AcadNexus</p>
        <h1 class="mt-4 text-4xl font-bold sm:text-5xl">Shaping the future of learning and talent</h1>
        <p class="mt-6 text-base text-slate-200">
          AcadNexus partners with organizations and professionals to create transformative learning experiences that scale with ambition.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-20">
      <div class="grid gap-12 md:grid-cols-2">
        <div class="space-y-5">
          <h2 class="text-3xl font-bold text-slate-900">Our Mission</h2>
          <p class="text-base text-slate-600">
            We empower learners to navigate change with confidence. AcadNexus delivers adaptive, data-driven learning journeys that blend strategic insights, applied practice, and mentorship from industry leaders.
          </p>
          <p class="text-base text-slate-600">
            From emerging talent to enterprise teams, we equip communities with the skills and mindsets needed to solve the world’s most complex challenges.
          </p>
        </div>
        <div class="space-y-5">
          <h2 class="text-3xl font-bold text-slate-900">Our Vision</h2>
          <p class="text-base text-slate-600">
            We envision a world where equitable access to high-impact learning unlocks innovation everywhere. By combining immersive pedagogy with actionable analytics, AcadNexus ensures every learner thrives.
          </p>
          <p class="text-base text-slate-600">
            We’re committed to sustainability, inclusion, and lifelong curiosity—values that shape every program and partnership we build.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-20">
      <div class="mx-auto max-w-6xl px-4">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-wide text-primary">Our Team</p>
          <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Meet the leaders behind AcadNexus</h2>
        </div>
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            v-for="member in team"
            :key="member.name"
            :name="member.name"
            :avatar="member.avatar"
            :message="member.bio"
          >
            <template #role>
              <p class="text-xs text-slate-500">{{ member.role }}</p>
            </template>
          </TestimonialCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TestimonialCard from '~/components/TestimonialCard.vue';

const team = [
  {
    name: 'Elena Morris',
    role: 'Co-founder & Chief Learning Officer',
    avatar: '/images/testimonials/priya.svg',
    bio: 'Elena architected blended learning programs for global enterprises and champions inclusive design principles.'
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Head of AI Curriculum',
    avatar: '/images/testimonials/jordan.svg',
    bio: 'Aisha brings two decades of AI leadership, ensuring every program balances innovation with responsible practice.'
  },
  {
    name: 'Miguel Santos',
    role: 'Director of Engineering Education',
    avatar: '/images/testimonials/alex.svg',
    bio: 'Miguel mentors developers worldwide and designs full-stack pathways that blend technical mastery with collaboration.'
  }
];

const siteUrl = useRuntimeConfig().public.siteUrl;

useHead({
  title: 'About AcadNexus',
  meta: [
    { name: 'description', content: 'Learn how AcadNexus empowers learners and organizations with mission-driven, data-informed education experiences.' },
    { property: 'og:title', content: 'About AcadNexus' },
    { property: 'og:description', content: 'Meet the leaders building equitable, high-impact learning ecosystems.' },
    { property: 'og:url', content: `${siteUrl}/about` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/about` }]
});
</script>
