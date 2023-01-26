import { acceptHMRUpdate, defineStore } from 'pinia'

interface APIResponse {
  info: PageInfo
  results: Character[]
}

interface PageInfo {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

interface Location {
  name: string
  url: string
}

export const useCharacterStore = defineStore('character', () => {
  const characters = ref(new Array<Character>())
  const query = ref('')
  const currentPage = ref(1)
  const totalPages = ref(0)

  const filteredCharacters = computed(() => query.value ? Array.from(characters.value).filter(character => `${character.name} ${character.status}`.toLowerCase().includes(query.value.toLowerCase())) : Array.from(characters.value))

  function fetchCharacters(page = 1) {
    currentPage.value = page
    fetch(`https://rickandmortyapi.com/api/character/${page > 1 ? `?page=${page}` : ''}`, {
      headers: { 'Content-type': 'application/json' },
    }).then(res => res.json()).then((response: APIResponse) => {
      characters.value = response.results
      totalPages.value = response.info.pages
    }).catch((error) => {
      console.error(error)
    })
  }

  function fetchCharacter(id: number) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      headers: { 'Content-type': 'application/json' },
    })
  }

  return {
    characters,
    query,
    filteredCharacters,
    fetchCharacters,
    totalPages,
    currentPage,
    fetchCharacter,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCharacterStore, import.meta.hot))
