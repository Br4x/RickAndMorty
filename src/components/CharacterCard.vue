<script setup lang="ts">
import type { Character } from '~/stores/character'
defineProps<{
  character: Character
}>()
</script>

<template>
  <a
    :href="`/character/${character.id}`"
    class="p-5 relative z-4 flex justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
  >
    <img :src="character.image" class="w-24 object-cover rounded-lg">
    <div class="p-2">
      <p class="mb-2 font-bold flex">
        <i
          :class="{ 'i-mdi-emoticon-dead bg-red-900': character.status === 'Dead', 'i-mdi-emoticon bg-green-400': character.status === 'Alive', 'i-mdi-crosshairs-unknown bg-gray-900': character.status === 'unknown' }"
          class="h-6 w-6 block mr-2"
        />
        {{ character.name }}
      </p>
      <p class="text-sm leading-5 text-gray-900">
        <i
          :class="{ 'i-mdi-alien': character.species === 'Alien', 'i-mdi-human-walk bg-green-400': character.status === 'Human', 'i-mdi-robot': character.species === 'Robot' }"
          class=" bg-gray-900 h-6 w-6 mr-2"
        />

        <i
          :class="{ 'i-mdi-gender-female': character.gender === 'Female', 'i-mdi-gender-male': character.gender === 'Male' }"
          class="bg-gray-900 h-6 w-6 mr-2"
        />
      </p>
    </div>
  </a>
</template>

<style scoped>

</style>
