<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
  <div class="flex flex-wrap">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
    import { computed } from "vue";
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import store from "../store";
    import MealItem from '../components/MealItem.vue'
    const ingredients = ref([]);
    const route = useRoute();
    const ingredient = computed(() => store.state.ingredient);
    const meals = computed(() => store.state.mealsByIngredient);

    onMounted(() => {
        store.dispatch('searchMealsByIngredient', route.params.ingredient)
    })

</script>