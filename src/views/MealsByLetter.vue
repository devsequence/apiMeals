<template>
  <div class="flex justify-center p-8">
    <router-link :to="{name : 'byLetter', params : {letter }}" v-for="letter of letters" class="px-2 fz-lg hover:text-blue-600">{{ letter }}</router-link>
  </div>
  <div class="flex flex-wrap">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
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
        store.dispatch('searchMealsByLetter',  route.params.letter)
    });
    onMounted(() => {
         store.dispatch('searchMealsByLetter',  route.params.letter)
    });
</script>