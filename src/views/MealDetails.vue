<template>
  <div v-if="loading" class="bg-gray-100 loader fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center	">
    <Preloader  color="orange" scale=".6"/>
  </div>
  <div class="container mx-auto my-0">
  <div class="w-4/4 mx-auto p-8">
    <h1 class="text-5xl	font-bold mb-5 text-left">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong> Category:</strong> {{ meal.strCategory }}</div>
      <div><strong> Area:</strong> {{ meal.strArea }}</div>
      <div><strong> Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind)  of new Array(20 )">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ind + 1}}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl mb-2">Measure</h2>
        <ul>
          <template v-for="(el, ind)  of new Array(20 )">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ind + 1}}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="py-2">
      {{ meal.strInstructions }}
    </div>
  </div>
  </div>
</template>
<script setup>

  import { ref, onMounted } from 'vue'
  import { useRoute }  from 'vue-router'
  import axiosClient from "../axiosClient";

  const route = useRoute();

  const meal = ref({});

  import Preloader from '../components/Preloader.vue'
  const loading = ref(true);

  onMounted(() => {
    axiosClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id }`)
        .then(({ data }) => {
          meal.value = data.meals[0] || {};
            loading.value = false;
      })
  })
</script>