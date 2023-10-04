<template>
  <div class="flex flex-wrap">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
    import { onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import store from "../store";
    import MealItem from "../components/MealItem.vue";

    const route = useRoute();


    const meals = computed(() => store.state.mealsByIngredient );
    onMounted(() => {
        store.dispatch('searchMealsByIngredient',  route.params.ingredient)
    });
</script>