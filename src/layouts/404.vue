<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main p="x4 y10" text="center teal-700">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn text-sm m="3 t8" @click="router.push('/characters')">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
