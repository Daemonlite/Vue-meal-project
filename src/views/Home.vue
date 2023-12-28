<template>
    <div class="p-8 pb-0 text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
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
  import { onMounted, ref } from "vue";
  import YouTubeButton from "../components/YouTubeButton.vue";
  import axiosClient from "../../axiosClient.js";
  
  const meals = ref([]);
  
  onMounted(async () => {
    for (let i = 0; i < 10; i++) {
      axiosClient
        .get(`random.php`)
        .then(({ data }) => meals.value.push(data.meals[0]));
    }
  });
  </script>