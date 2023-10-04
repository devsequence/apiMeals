<template>
  <div class="flex flex-wrap h-screen	">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
  import MealItem from "../components/MealItem.vue";
  import { computed, onMounted, ref} from 'vue';
  import store from "../store";
  import axiosClient from "../axiosClient.js";
  const meals = ref([]);
  console.log(axiosClient);
  onMounted(() => {
      for (let i = 0; i < 8; i++) {
          axiosClient
            .get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(({ data }) => meals.value.push(data.meals[0]))
      }
  });

</script>
<style> </style>