<template>
  <div class="w-full p-8">
    <input v-model="keyword" type="text"
           @change="searchMeals"
           placeholder="Search for meals" class="border border-indigo-600 outline-0	w-full p-4 h-12">
  </div>
  <div class="flex flex-wrap">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
  import {ref, computed, onMounted } from 'vue'
  import { useRoute } from "vue-router";
  import store from "../store";
  import MealItem from "../components/MealItem.vue";

  const keyword = ref('');
  const meals = computed(() => store.state.searchedMeals);
  const route = useRoute();

  function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
  }
  onMounted(() => {
      keyword.value = route.params.name;
      if(keyword.value){
        searchMeals()
      }
  })
</script>