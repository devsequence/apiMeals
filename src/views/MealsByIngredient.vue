<template>
  <div v-if="loading" class="bg-gray-100 loader fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center	">
    <Preloader  color="orange" scale=".6"/>
  </div>
  <div class="container mx-auto my-0">
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
  <div class="flex flex-wrap">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
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
    import Preloader from '../components/Preloader.vue'
    const loading = ref(true);

    onMounted(() => {
        store.dispatch('searchMealsByIngredient', route.params.ingredient);
        loading.value = false;
    })

</script>