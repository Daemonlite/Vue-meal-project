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
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 border-red-600 bg-red-600 text-white transition-colors"
            >YouTube</a
          >

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../store";
import { computed, ref,onMounted } from "vue";
import {useRoute} from "vue-router"

const meals = computed(() => store.state.searchedMeals);

const router = useRoute()

const keyword = ref("");

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(()=>{
  keyword.value = router.params.name
  if(keyword.value){
    searchMeals()
  }
})
</script>
