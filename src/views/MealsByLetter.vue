<template>
  <div class="flex justify-center p-8">
    <router-link :to="{name : 'byLetter', params : {letter }}" v-for="letter of letters" class="px-2 fz-lg hover:text-blue-600">{{ letter }}</router-link>
  </div>
  <div class="flex flex-wrap" v-if="meals">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else>
    <h2 class="p-5 text-center text-3xl font-bold mb-4">Meals not found</h2>
  </div>
</template>
<script setup>
    import { onMounted, computed, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import store from "../store";
    import MealItem from "../components/MealItem.vue";
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

    const route = useRoute();
    const meals = computed(() => store.state.mealsByLetter);
    watch(route, () =>{
        store.dispatch('searchMealsByLetter',  route.params.letter);
    });
    onMounted(() => {
         store.dispatch('searchMealsByLetter',  route.params.letter);
    });
</script>