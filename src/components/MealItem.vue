<template>
  <div class="w-1/1 sm:w-1/3 md:w-1/4 mb-4 px-2">
    <div class="rounded-lg border border-slate-200	overflow-hidden">
      <router-link :to="{name: 'mealDetails', params: { id: meal.idMeal }}"><img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-h-48 w-full object-cover"></router-link>
      <h3 class="mx-2 mb-3">{{ meal.strMeal }}</h3>
      <a :href="meal.strYoutube" target="_blank" class="inline-flex border rounded-sm border-red-500 p-2	hover:bg-red-500	hover:text-white mx-2 mb-2">YouTube</a>
    </div>
  </div>
</template>
<script setup>
  const { meal } = defineProps({
      meal: {
          required: true,
          type: Object
      }
  })
</script>