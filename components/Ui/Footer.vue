<template>
  <footer
    class="container border-2 border-b-0 flex flex-col lg:flex-row justify-between items-center w-full"
  >
    <div class="w-full block gap-y-5 items-center gap-x-5 py-10 lg:flex">
      <NuxtLink to="/">
        <NuxtImg src="/logo/logo-white.svg" width="278" height="83" />
      </NuxtLink>
      <p>©{{ new Date().getFullYear() }} All rights reserved</p>
    </div>
    <span class="ml-auto">info@inkshrink.co</span>
  </footer>
</template>
<script setup></script>
<style scoped lang="postcss"></style>
