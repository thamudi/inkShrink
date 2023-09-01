<template>
  <div
    class="my-20 border-y-2 py-12 border-dashed border-inkshrink-green"
    id="services"
  >
    <div class="flex flex-col lg:flex-row justify-between gap-y-12">
      <div class="flex lg:flex-col justify-start gap-x-10 items-center">
        <NuxtImg
          src="/icons/strategy.svg"
          width="80"
          height="80"
          class="lg:w-[140px]"
        />
        <div class="flex flex-col lg:items-center gap-y-5">
          <h2 class="text-xl lg:mt-10">Content Strategy</h2>
          <p class="">Plan meaningful. cohesive. and sustainable content</p>
        </div>
      </div>
      <div class="flex lg:flex-col justify-start gap-x-10 items-center">
        <NuxtImg
          src="/icons/quality.svg"
          width="80"
          height="80"
          class="lg:w-[140px]"
        />
        <div class="flex flex-col lg:items-center gap-y-5">
          <h2 class="text-xl lg:mt-10">Content Writing</h2>
          <p class="">Create engaging and succinct written remedies</p>
        </div>
      </div>
      <div class="flex lg:flex-col justify-start gap-x-10 items-center">
        <NuxtImg
          src="/icons/proofreading.svg"
          width="80"
          height="80"
          class="lg:w-[140px]"
        />
        <div class="flex flex-col lg:items-center gap-y-5">
          <h2 class="text-xl lg:mt-10">Proofreading</h2>
          <p class="">Ensure flawless and crystal clear delivery</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="postcss"></style>
