<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch ">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center px-5 h-full ">
     Home
    </router-link>
   
    <div class="flex items-center">
      <router-link :to="{ name: 'byName' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
       Search Meals by name
       </router-link>

      <router-link :to="{ name: 'byLetter' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
       Meals by Letter  
      </router-link>

      <router-link :to="{ name: 'byIngredient' }" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
        Meals by Ingredients
      </router-link>
    </div>

    </header>
</template>