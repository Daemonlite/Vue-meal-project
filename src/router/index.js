import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'

const routes = [
    {
        path:'/',
        component:DefaultLayout,
        children:[
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
            {
                path:"/meal/:id",
                name:'mealDetails',
                component:MealDetails

            }
        
        ]

    },
   

    {
        path:'/guest',
        name:'guest',
        component:GuestLayout
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes

})

export default router