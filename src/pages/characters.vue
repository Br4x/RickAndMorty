<script setup lang="ts">
const characterStore = useCharacterStore()

onMounted(() => {
  characterStore.fetchCharacters()
})
</script>

<template>
  <SearchBar />
  <Pagination />
  <div class="flex gap-2 justify-center mt-10 flex-wrap w-full">
    <CharacterCard v-for="character in characterStore.filteredCharacters" :key="`character_${character.name}${character.species}${character.status}`" :character="character" />
  </div>
</template>

<route lang="yaml">
meta:
  tile: test technique
  layout: home
</route>
