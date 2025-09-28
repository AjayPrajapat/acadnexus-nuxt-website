<template>
  <header class="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50" role="banner">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4" aria-label="Main">
      <NuxtLink to="/" class="flex items-center gap-2" aria-label="AcadNexus home">
        <img src="/images/logo.svg" alt="AcadNexus logo" class="h-9 w-auto" loading="lazy" />
        <span class="text-xl font-bold text-primary">AcadNexus</span>
      </NuxtLink>
      <button
        class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        :aria-label="isOpen ? 'Close navigation menu' : 'Open navigation menu'"
      >
        <span class="sr-only">Toggle navigation</span>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul
        class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700"
      >
        <li v-for="link in links" :key="link.href">
          <NuxtLink
            :to="link.href"
            class="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="rounded-full bg-primary px-4 py-2 text-white shadow hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get Started
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden border-t border-slate-200 bg-white" role="dialog" aria-modal="true">
        <ul class="space-y-1 px-4 py-4 text-base font-medium text-slate-700">
          <li v-for="link in links" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="block rounded px-3 py-2 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              @click="isOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="mt-3 block rounded-full bg-primary px-4 py-2 text-center text-white shadow hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              @click="isOpen = false"
            >
              Get Started
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  links: { label: string; href: string }[];
}>();

const isOpen = ref(false);

watch(
  () => useRoute().path,
  () => {
    isOpen.value = false;
  }
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
