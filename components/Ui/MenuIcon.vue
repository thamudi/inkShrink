<template>
  <div class="block lg:hidden cursor-pointer">
    <div v-if="!props.isOpen">
      <NuxtImg
        src="/icons/burger.svg"
        alt="navigation icon"
        width="30"
        height="30"
        @click="$emit('toggle-menu')"
      />
    </div>
    <div v-else>
      <NuxtImg
        src="/icons/close.svg"
        alt="navigation icon"
        width="30"
        height="30"
        @click="$emit('toggle-menu')"
      />
    </div>
  </div>
</template>

<script setup>
  defineEmits(['toggle-menu'])
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  })
</script>
