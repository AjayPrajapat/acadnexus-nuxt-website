<template>
  <footer class="bg-slate-900 text-slate-200" role="contentinfo">
    <div class="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 md:flex-row md:justify-between">
      <div class="max-w-md space-y-4">
        <div class="flex items-center gap-2">
          <img src="/images/logo-light.svg" alt="AcadNexus logo" class="h-9 w-auto" loading="lazy" />
          <span class="text-xl font-semibold">AcadNexus</span>
        </div>
        <p class="text-sm text-slate-300">
          AcadNexus empowers learners with expertly crafted courses, personalized learning paths, and insights from industry leaders.
        </p>
      </div>
      <div class="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-400">Explore</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li v-for="link in links" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h3>
          <ul class="mt-4 space-y-2 text-sm text-slate-300">
            <li>Email: <a class="hover:text-white" href="mailto:hello@acadnexus.com">hello@acadnexus.com</a></li>
            <li>Phone: <a class="hover:text-white" href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li>Address: 123 Innovation Drive, Boston, MA</li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-400">Follow Us</h3>
          <ul class="mt-4 flex items-center gap-4">
            <li v-for="icon in social" :key="icon.href">
              <a
                :href="icon.href"
                target="_blank"
                rel="noopener"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span class="sr-only">{{ icon.label }}</span>
                <component :is="icon.component" class="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-slate-800 bg-slate-950 py-4">
      <p class="text-center text-xs text-slate-500">© {{ new Date().getFullYear() }} AcadNexus. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  links: { label: string; href: string }[];
  social: { label: string; href: string; component: any }[];
}>();
</script>
