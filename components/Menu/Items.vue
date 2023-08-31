<template>
  <span
    v-for="(linkItem, index) in navItems"
    :id="`nav-items-${index}`"
    class="items-container"
  >
    <NuxtLink :to="linkItem.link"> {{ linkItem.label }} </NuxtLink>
  </span>
</template>
<script setup>
  const navItems = ref([
    {
      link: '/',
      label: 'home',
    },
    {
      link: '#services',
      label: 'services',
    },

    {
      link: '#contact',
      label: 'contact us',
    },
  ])
</script>
<style scoped lang="postcss">
  .items-container {
    @apply capitalize text-xl;
    @apply flex;
    @apply mb-5 lg:mb-auto;
  }
</style>
