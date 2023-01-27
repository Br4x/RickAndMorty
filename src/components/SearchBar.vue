<script setup lang="ts">
const characterStore = useCharacterStore()
</script>

<template>
  <div class="h-full w-full z-4">
    <label for="query" class="text-black font-semibold z-4">What's the character name or status ?</label>
    <div class="relative flex items-center">
      <i class="i-carbon-user w-6 h-6 absolute left-4 inset-y-0 my-auto" />

      <input
        v-model="characterStore.query"
        type="text"
        name="query"
        placeholder="Character's name or status"
        class="
          outline-none
          block
          w-full
          rounded-full
          placeholder-gray-500
          bg-white
          dark:bg-gray-800 dark:border-gray-600
          pl-12
          pr-4
          h-12
          text-gray-600
          transition
          duration-300
          invalid:ring-2 invalid:ring-red-400
          ring-2 ring-primary
        "
      >
    </div>
  </div>
</template>

<style scoped>

</style>
