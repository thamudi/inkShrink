// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/css/main.css', '@/assets/css/typography.css'],
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: 'vercel',
  },
  runtimeConfig: {
    smtpPort: '',
    smtpEmail: '',
    smtpPass: '',
    smtpHost: '',
    mailTo: '',
  },
})
