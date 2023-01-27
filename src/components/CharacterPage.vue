<script setup lang="ts">
import type { Character } from '~/stores/character'
const characterStore = useCharacterStore()
const route = useRoute()

const res = await characterStore.fetchCharacter(route.params.id)
const character: Character = await res.json()
</script>

<template>
  <div class="flex flex-col bg-gray-100 h-screen">
    <div class="flex bg-white shadow flex-col sm:flex-row">
      <img class="object-cover sm:w-96 h-64 shadow-lg sm:h-96 mr-2 w-full" :src="character.image" alt="">
      <div class="mb-6 text-left p-6">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {{ character.name }}
        </h2>
        <b>Race : </b>{{ character.species }}<br>
        <b>Gender : </b>{{ character.gender }}<br>
        <b>Status : </b>{{ character.status }}<br>
        <b>Location : </b>{{ character.location.name }}<br>
        <b>Origin : </b>{{ character.origin.name }}<br>
        <a class="mt-6 px-4 py-6 block bg-green-400 font-semibold text-xl text-gray-900 rounded shadow" href="/characters">
          <i class="i-carbon-chevron-left w-4 h-4" />
          Return to characters
        </a>
      </div>
    </div>

    <p class="my-4 text-xl font-bold tracking-widest uppercase">
      In the episodes :
    </p>
    <div class="p-10 flex gap-4 flex-wrap items-center rounded justify-center">
      <a v-for="episode in character.episode" :key="episode" :href="episode" class="bg-white flex p-2 shadow rounded border-1 border-gray-200 w-96">
        <i class="mr-1 w-5 h-5 mt-px text-deep-purple-accent-400 i-carbon-flash" />
        Episode {{ episode.replace('https://rickandmortyapi.com/api/episode/', '') }}
      </a>
    </div>
  </div>
</template>
