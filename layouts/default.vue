<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Navbar :links="navigationLinks" />
    <main class="flex-1">
      <slot />
    </main>
    <Footer :links="footerLinks" :social="socialLinks" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue';

const navigationLinks = [
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' }
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/acadnexus',
    component: {
      render() {
        return h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, [
          h('path', {
            d: 'M20.452 20.452h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.144.925-2.069 2.069-2.069 1.142 0 2.068.925 2.068 2.069 0 1.142-.926 2.068-2.068 2.068zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'
          })
        ]);
      }
    }
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/acadnexus',
    component: {
      render() {
        return h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, [
          h('path', {
            d: 'M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.012-14.012 14.012A13.93 13.93 0 010 19.539a9.86 9.86 0 007.257-2.037 4.93 4.93 0 01-4.597-3.417 4.93 4.93 0 002.22-.085 4.926 4.926 0 01-3.95-4.828v-.062a4.89 4.89 0 002.23.616 4.924 4.924 0 01-1.523-6.573 13.978 13.978 0 0010.15 5.146 5.563 5.563 0 01-.123-1.126 4.926 4.926 0 018.517-3.367 9.72 9.72 0 003.127-1.195 4.92 4.92 0 01-2.165 2.724 9.868 9.868 0 002.828-.77 10.6 10.6 0 01-2.464 2.56z'
          })
        ]);
      }
    }
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@acadnexus',
    component: {
      render() {
        return h('svg', { class: 'h-5 w-5', fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, [
          h('path', {
            d: 'M23.498 6.186a2.971 2.971 0 00-2.09-2.102C19.44 3.5 12 3.5 12 3.5s-7.44 0-9.408.584a2.971 2.971 0 00-2.09 2.102A31.287 31.287 0 000 12a31.287 31.287 0 00.502 5.814 2.971 2.971 0 002.09 2.102C4.56 20.5 12 20.5 12 20.5s7.44 0 9.408-.584a2.971 2.971 0 002.09-2.102A31.287 31.287 0 0024 12a31.287 31.287 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z'
          })
        ]);
      }
    }
  }
];
</script>
