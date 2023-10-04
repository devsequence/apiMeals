<template>
  <h1 class="text-center text-4xl font-bold mb-4">Meal by Ingredient</h1>
  <input v-model="keyword"
         type="text"
         placeholder="Search for ingredients"
         class="border border-indigo-600 outline-0	w-full p-4 h-12">
  <div class="grid grid-col-1 md:grid-col-3 p-5">
    <router-link v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
                 :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient }}" class="bg-white	mb-4 p-3 block">
      <h2>{{ ingredient.strIngredient }}</h2>
      <h4>{{ ingredient.strDescription }}</h4>
    </router-link>
  </div>
</template>
<script setup>
    import { onMounted, ref, computed } from 'vue';

    import axiosClient from "../axiosClient";

    const keyword = ref('');

    const ingredients = ref([]);


    const computedIngredients = computed(() => {
        if(!computedIngredients) return  ingredients;

        return ingredients.value.filter((i) => {
              return (i.strDescription || '').toLowerCase().includes(keyword.value.toLowerCase()) ||
                  i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
            })
    });
    onMounted(() => {
        axiosClient.get('https://themealdb.com/api/json/v1/1/list.php?i=list')
            .then(({ data }) => {
                ingredients.value = data.meals;
            })
    });
</script>