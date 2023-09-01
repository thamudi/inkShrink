<template>
  <div class="hero-container">
    <h1>Artificial intelligence can write, but can it influence?</h1>
    <div class="max-w-[90%] lg:max-w-full">
      <div class="relative w-fit ml-auto">
        <NuxtImg
          src="/logo/hero.svg"
          alt="hero banner"
          width="550"
          height="250"
          class="ml-auto mr-0 spin absolute"
        >
        </NuxtImg>
        <NuxtImg
          src="/logo/hero-inner.svg"
          alt="hero banner"
          width="550"
          height="250"
          class="ml-auto mr-0 spin-left"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
  .hero-container {
    @apply my-20;
    @apply flex flex-col gap-y-20;
    @apply gap-x-20 lg:flex-row lg:items-end;
  }

  .spin {
    animation: spin 50s linear infinite;
  }

  .spin-left {
    animation: spin-left 50s linear infinite;
  }
</style>
