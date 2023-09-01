<template>
  <div v-show="visible" class="back-to-top" @click="backToTop">
    <slot>
      <div class="default">
        <span>
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"
            />
          </svg>
        </span>
      </div>
    </slot>
  </div>
</template>
<script setup>
  import { set } from '@vueuse/core'

  const visible = ref(false)

  const catchScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      set(visible, true)
    } else {
      set(visible, false)
    }
  }

  const backToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  onMounted(() => (window.onscroll = () => catchScroll()))
</script>
<style scoped lang="postcss">
  .back-to-top-fade-enter-active,
  .back-to-top-fade-leave-active {
    transition: opacity 0.7s;
  }

  .back-to-top-fade-enter,
  .back-to-top-fade-leave-to {
    @apply opacity-0;
  }

  .back-to-top {
    @apply cursor-pointer fixed text-center;
    @apply bottom-8 right-3 lg:hidden;
  }

  .back-to-top .default {
    @apply fill-current;
    @apply text-inkshrink-green;
  }

  .back-to-top:hover .default {
    @apply text-inkshrink-green-dark;
  }

  .back-to-top .icon {
    @apply w-12 h-12 text-5xl rounded-full;
  }
</style>
