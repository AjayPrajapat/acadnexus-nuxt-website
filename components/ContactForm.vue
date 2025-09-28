<template>
  <form @submit.prevent="handleSubmit" novalidate class="space-y-6" aria-labelledby="contact-heading">
    <div>
      <label for="name" class="block text-sm font-medium text-slate-700">Name</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        :aria-invalid="!!errors.name"
        aria-describedby="name-error"
      />
      <p v-if="errors.name" id="name-error" class="mt-1 text-xs text-red-600">{{ errors.name }}</p>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-slate-700">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        class="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        :aria-invalid="!!errors.email"
        aria-describedby="email-error"
      />
      <p v-if="errors.email" id="email-error" class="mt-1 text-xs text-red-600">{{ errors.email }}</p>
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-slate-700">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        class="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        :aria-invalid="!!errors.message"
        aria-describedby="message-error"
      ></textarea>
      <p v-if="errors.message" id="message-error" class="mt-1 text-xs text-red-600">{{ errors.message }}</p>
    </div>
    <button
      type="submit"
      class="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto"
      :disabled="submitting"
    >
      <span v-if="submitting" class="flex items-center gap-2">
        <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        Sending...
      </span>
      <span v-else>{{ props.buttonLabel }}</span>
    </button>
    <p v-if="statusMessage" class="text-sm" :class="statusClass">{{ statusMessage }}</p>
  </form>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    submitAction?: (payload: { name: string; email: string; message: string }) => Promise<void> | void;
    buttonLabel?: string;
  }>(),
  {
    buttonLabel: 'Send'
  }
);

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const errors = reactive<{ name?: string; email?: string; message?: string }>({});
const submitting = ref(false);
const statusMessage = ref('');
const statusClass = ref('text-slate-600');

const validate = () => {
  errors.name = form.name.trim() ? undefined : 'Please enter your name.';
  errors.email = /.+@.+\..+/.test(form.email) ? undefined : 'Enter a valid email address.';
  errors.message = form.message.trim().length >= 10 ? undefined : 'Message should be at least 10 characters.';
  return !errors.name && !errors.email && !errors.message;
};

const handleSubmit = async () => {
  statusMessage.value = '';
  if (!validate()) return;
  submitting.value = true;
  try {
    if (props.submitAction) {
      await props.submitAction({ ...form });
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
    statusMessage.value = 'Thank you! Your message has been sent.';
    statusClass.value = 'text-green-600';
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error) {
    statusMessage.value = 'Something went wrong. Please try again later.';
    statusClass.value = 'text-red-600';
  } finally {
    submitting.value = false;
  }
};
</script>
