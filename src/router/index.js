import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import Ingredients from '../views/Ingredients.vue'
import MealsArea from '../views/MealsArea.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByArea from '../views/MealsByArea.vue'
import MealDetails  from '../views/MealDetails.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealByName,
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients,
      },
      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealsByIngredient,
      },
      {
        path: '/by-areas',
        name: 'byAreas',
        component: MealsArea,
      },
      {
        path: '/by-area/:area',
        name: 'byArea',
        component: MealsByArea,
      },
      {
        path: '/letter/:letter?',
        name: 'byLetters',
        component: MealList,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
  }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;