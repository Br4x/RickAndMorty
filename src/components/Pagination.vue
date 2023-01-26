<script setup lang="ts">
const characterStore = useCharacterStore()
</script>

<template>
  <div class="flex items-center justify-center w-full gap-2 flex-wrap">
    <button
      v-for="page in characterStore.totalPages"
      :key="`page_${page}`"
      :class="{ 'bg-blue-400 text-white font-semibold': characterStore.currentPage === page, ' bg-white text-gray-400': characterStore.currentPage !== page }"
      class="w-10 h-10 p-2  z-4 rounded mt-4 shadow-xl"
      @click="characterStore.fetchCharacters(page)"
    >
      {{ page }}
    </button>
  </div>
</template>
