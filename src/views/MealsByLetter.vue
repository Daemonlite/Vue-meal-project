<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
    <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          sapiente sit, debitis quidem inventore
        </p>
        <div class="flex items-center ">

        <YouTubeButton :href="meal.strYoutube">Youtube</YouTubeButton>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from '../store';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(()=>store.state.mealsByLetter)
onMounted(()=>{
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>
