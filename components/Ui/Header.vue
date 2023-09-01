<template>
  <header class="header">
    <div class="flex justify-between border-b-2 pb-4">
      <NuxtLink to="/">
        <NuxtImg src="/logo/logo-white.svg" width="278" height="83" />
      </NuxtLink>

      <UiMenuIcon :is-open="isOpen" @toggle-menu="toggleMenu" />
      <MenuNavBar class="hidden lg:flex" />
    </div>

    <MenuNavBar :class="isOpen ? 'block' : 'hidden'" class="lg:hidden mt-6" />
  </header>
</template>
<script setup>
  import { set } from '@vueuse/core'
  const isOpen = ref(false)

  const toggleMenu = () => {
    set(isOpen, !isOpen.value)
  }
</script>
<style scoped lang="postcss">
  .header {
    @apply py-10;
  }
</style>
