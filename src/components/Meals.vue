<template>
  <div class="flex flex-wrap w-full px-6 h-full">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8 w-full h-full"></div>
</template>
<script setup>
    import MealItem from './MealItem.vue';
    const { meals  } = defineProps({
        meals: {
            required: true,
            type: Array,
            error : null
        }
    })

</script>