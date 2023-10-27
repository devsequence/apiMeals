<template>
  <div v-if="loading" class="bg-gray-100 loader fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center	">
    <Preloader  color="orange" scale=".6"/>
  </div>
  <div class="container mx-auto my-0">
    <div class="px-8 mb-4 pt-2 "><h1>Meals by {{area}}</h1></div>
    <div class="flex flex-wrap mx-6">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
     import { computed } from "vue";
    import { onBeforeMount, onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import store from "../store";
    const area = ref([]);
    const route = useRoute();
    import MealItem from '../components/MealItem.vue'
    import Preloader from '../components/Preloader.vue'
    const loading = ref(true);
     const meals = computed(() => store.state.searchedAreas);
     onBeforeMount(() => {
         store.dispatch('searchMealsByArea', route.params.area);
         area.value = route.params.area;
         loading.value = false;
     });
     onMounted(() => {})

</script>