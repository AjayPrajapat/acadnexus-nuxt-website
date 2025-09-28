// https://nuxt.com/docs/api/configuration/nuxt-config
import { courses, blogPosts } from './data/content';

const dynamicRoutes = [
  ...courses.map((course) => `/courses/${course.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`)
];

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/courses',
        '/blog',
        '/contact',
        '/faq',
        '/terms',
        '/privacy',
        ...dynamicRoutes
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      titleTemplate: '%s - AcadNexus',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'AcadNexus is an EdTech platform offering high-impact courses, expert-led pathways, and insights for lifelong learners.'
        },
        { name: 'theme-color', content: '#1d4ed8' },
        { property: 'og:site_name', content: 'AcadNexus' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
    configPath: 'tailwind.config.ts'
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.acadnexus.com'
    }
  }
});
