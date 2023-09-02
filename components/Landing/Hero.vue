<template>
  <div class="hero-container">
    <div class="flex flex-col gap-y-4">
      <h1>Custom words for your business</h1>
      <h2 class="text-2xl">Human-centered content</h2>
    </div>
    <div class="max-w-[90%] lg:max-w-full">
      <div class="ml-auto">
        <NuxtImg
          src="/logo/hero-pen-no-blur.svg"
          alt="hero banner"
          width="150"
          height="150"
          class="ml-auto mr-0 lg:w-[350px]"
        />
        <!-- <NuxtImg
          src="/logo/hero.svg"
          alt="hero banner"
          width="550"
          height="250"
          class="ml-auto mr-0 spin absolute"
        />
        <NuxtImg
          src="/logo/hero-inner.svg"
          alt="hero banner"
          width="550"
          height="250"
          class="ml-auto mr-0 spin-left"
        /> -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
  .hero-container {
    @apply my-20;
    @apply flex flex-row gap-y-20 justify-between;
  }

  .spin {
    animation: spin 50s linear infinite;
  }

  .spin-left {
    animation: spin-left 50s linear infinite;
  }
</style>
