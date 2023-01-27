<script setup lang="ts">
useHead({
  title: 'Test technique',
  meta: [
    { name: 'description', content: 'Test technique' },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
