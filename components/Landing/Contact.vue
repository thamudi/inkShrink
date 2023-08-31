<template>
  <div id="contact">
    <h1>Get in touch</h1>

    <div class="my-20">
      <form class="flex flex-col gap-y-5" v-on:submit.prevent="">
        <div class="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Topic/Company" />
        </div>
        <input type="email" placeholder="Email" />
        <textarea
          class="h-52"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>

        <button class="" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="postcss">
  input,
  textarea,
  button {
    @apply rounded-lg;
    @apply text-lg;
    @apply border-2 border-white;
    @apply px-6 py-4;
    @apply mt-2;
    @apply w-full;
  }

  button {
    @apply text-inkshrink-black;
    @apply w-60;
    @apply font-bold;
    /* @apply px-14 py-4; */
    @apply bg-inkshrink-green;
  }
</style>
