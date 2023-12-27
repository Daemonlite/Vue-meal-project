
<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-spacing-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
     
    />
  </div>

  <div>
    <pre>{{meals }}</pre>
  </div>
</template>

<script setup>

import store from '../store';
import {computed,ref} from 'vue'


const meals = computed(()=>store.state.searchedMeals)

const keyword = ref('')
function searchMeals(){
  store.dispatch("searchMeals",keyword.value)
}

</script>
