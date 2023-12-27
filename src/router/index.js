import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/letter/:letter?',
        name:'byLetter',
        component:MealsByLetter
    },
    {
        path:'/name/:name?',
        name:'byName',
        component:MealsByName

    },
    {
        path:'/ingredient/:ingredient?',
        name:'byIngredient',
        component:MealsByIngredients
    },


]

const router = createRouter({
    history:createWebHistory(),
    routes

})

export default router