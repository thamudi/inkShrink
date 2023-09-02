<template>
  <div class="container">
    <UiHeader />
    <LandingHero />
    <LandingServices />
    <LandingContact />
  </div>
  <UiFooter />
</template>
<script setup>
  useSeoMeta({
    title: () => `InkShrink`,
    ogTitle: () => `InkShrink`,
    twitterTitle: () => `InkShrink`,
    description: () =>
      `Ink Shrink is a content writing service that specializes in humanizing content in an AI era. Ink Shrink provides content strategies, quality writing, and proofreading for individuals and small businesses. Ink shrink transforms rigid long proposals, articles, blogs, and other documents into an understandable, concise, and relished documents.`,
    ogDescription: () =>
      `Ink Shrink is a content writing service that specializes in humanizing content in an AI era. Ink Shrink provides content strategies, quality writing, and proofreading for individuals and small businesses. Ink shrink transforms rigid long proposals, articles, blogs, and other documents into an understandable, concise, and relished documents.`,
    twitterDescription: () =>
      `Ink shrink transforms rigid long proposals, articles, blogs, and other documents into an understandable, concise, and relished documents.`,
  })
</script>
