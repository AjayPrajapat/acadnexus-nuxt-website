<template>
  <div class="bg-white">
    <section class="bg-slate-900 py-16 text-white">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary/80">Contact</p>
        <h1 class="mt-4 text-4xl font-bold sm:text-5xl">Let’s build the future of learning together</h1>
        <p class="mt-4 text-base text-slate-200">
          Share your goals and we’ll tailor a learning plan for your team or professional journey.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16">
      <div class="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
        <div>
          <h2 id="contact-heading" class="text-2xl font-semibold text-slate-900">Send us a message</h2>
          <p class="mt-3 text-sm text-slate-600">
            Our team responds within two business days. Required fields are marked with an asterisk (*).
          </p>
          <ContactForm :submit-action="submitForm" button-label="Send message" class="mt-8" />
        </div>
        <aside class="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div>
            <h3 class="text-lg font-semibold text-slate-900">Ways to connect</h3>
            <ul class="mt-4 space-y-2 text-sm text-slate-600">
              <li>Email: <a href="mailto:hello@acadnexus.com" class="text-primary hover:underline">hello@acadnexus.com</a></li>
              <li>Phone: <a href="tel:+1234567890" class="text-primary hover:underline">+1 (234) 567-890</a></li>
              <li>Address: 123 Innovation Drive, Boston, MA</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-slate-900">Visit us</h3>
            <div class="mt-4 overflow-hidden rounded-2xl shadow">
              <iframe
                title="AcadNexus office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5766038779077!2d-71.05829182373237!3d42.360082871195436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370aaf18b90c1%3A0x9b5fdf4b62e1d2f!2sBoston%20City%20Hall!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="260"
                style="border:0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue';

const siteUrl = useRuntimeConfig().public.siteUrl;

const submitForm = async (payload: { name: string; email: string; message: string }) => {
  const { $axios } = useNuxtApp();
  try {
    await $axios.post('/contact', payload);
  } catch (error) {
    // Fallback silently; ContactForm handles error state.
    throw error;
  }
};

useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Reach out to the AcadNexus team for partnership inquiries, custom programs, or learner support.' },
    { property: 'og:title', content: 'Contact AcadNexus' },
    { property: 'og:description', content: 'Let’s collaborate on immersive learning experiences tailored to your goals.' },
    { property: 'og:url', content: `${siteUrl}/contact` }
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}/contact` }]
});
</script>
