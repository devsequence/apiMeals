<template>
  <div v-if="loading" class="bg-gray-100 loader fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center	">
    <Preloader  color="orange" scale=".6"/>
  </div>

  <div class="container mx-auto my-0">
  <div class="flex justify-center p-8">
    <router-link :to="{name : 'byLetter', params : {letter }}" v-for="letter of letters" class="px-2 fz-lg hover:text-blue-600">{{ letter }}</router-link>
  </div>
  <div class="flex flex-wrap" v-if="meals">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else>
    <h2 class="p-5 text-center text-3xl font-bold mb-4">Meals not found</h2>
  </div>
  </div>
</template>
<script setup>
    import { onMounted, computed, watch, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import store from "../store";
    import MealItem from "../components/MealItem.vue";
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

    const route = useRoute();
    const meals = computed(() => store.state.mealsByLetter);

    import Preloader from '../components/Preloader.vue'
    const loading = ref(true);
    watch(route, () =>{
        store.dispatch('searchMealsByLetter',  route.params.letter);
    });
    onMounted(() => {
         store.dispatch('searchMealsByLetter',  route.params.letter);
        loading.value = false;
    });
</script>