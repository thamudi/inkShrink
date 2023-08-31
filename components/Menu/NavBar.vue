<template>
  <nav class="nav-container">
    <MenuItems />
  </nav>
</template>
<script setup></script>
<style scoped lang="postcss">
  .nav-container {
    @apply w-full justify-end gap-x-5;
    @apply border-b-2 lg:border-none;
  }
</style>
