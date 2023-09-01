<template>
  <div id="contact">
    <h1>Get in touch</h1>

    <div class="my-20">
      <form
        class="flex flex-col gap-y-5"
        @submit.prevent="submitForm"
        id="contactForm"
      >
        <div class="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <input
            type="text"
            placeholder="Name"
            name="name"
            v-model="form.name"
          />
          <input
            type="text"
            placeholder="Topic/Company"
            name="topic"
            v-model="form.topic"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          v-model="form.email"
        />
        <textarea
          class="h-52"
          name="message"
          id="message"
          v-model="form.message"
          placeholder="Message"
        ></textarea>

        <button v-if="!disabled" :disabled="disabled" type="submit">
          Submit
        </button>
        <div v-else="disabled" class="loader my-8"></div>
      </form>
    </div>
  </div>
</template>
<script setup>
  import { get, set } from '@vueuse/core'
  import { ElNotification } from 'element-plus'

  const disabled = ref(false)
  const submitted = ref(false)
  const form = reactive({
    name: '',
    topic: '',
    email: '',
    message: '',
  })

  const submitForm = async () => {
    set(disabled, true)
    const { name, topic, email, message } = toRefs(form)

    try {
      const contactResponse = await $fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: get(name),
          topic: get(topic),
          email: get(email),
          message: get(message),
        }),
      })
      buildToast('success', get(contactResponse)?.message)
    } catch (error) {
      buildToast('error', get(error)?.data?.message)
    } finally {
      set(disabled, false)
    }
  }

  function buildToast(type, message) {
    ElNotification({
      title: type === 'success' ? 'Success' : 'Failed',
      message: message,
      type: type,
      duration: 5000,
      position: 'bottom-right',
    })
  }
</script>
<style scoped lang="postcss">
  #contactForm input,
  #contactForm textarea,
  #contactForm button {
    @apply rounded-lg;
    @apply text-lg;
    @apply border-2 border-white;
    @apply px-6 py-4;
    @apply mt-2;
    @apply w-full;
  }

  #contactForm button {
    @apply text-inkshrink-black;
    @apply w-60;
    @apply font-bold;
    @apply bg-inkshrink-green;
    @apply border-none;
  }

  #contactForm button:disabled {
    @apply bg-inkshrink-black text-gray-500;
  }
</style>
