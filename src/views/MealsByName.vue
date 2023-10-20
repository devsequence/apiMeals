<template>
  <div class="container mx-auto my-0">
  <div class="w-full p-8 ">
    <input v-model="keyword" type="text"
           @change="searchMeals"
           placeholder="Search for meals" class="border border-indigo-600 outline-0	w-full p-4 h-12">
  </div>
  <div class="flex flex-wrap">
    <Meals :meals="meals" />
  </div>
  </div>
</template>
<script setup>
  import {ref, computed, onMounted } from 'vue'
  import { useRoute } from "vue-router";
  import store from "../store";
  import Meals from "../components/Meals.vue";
  const route = useRoute();
  const keyword = ref("");
  const meals = computed(() => store.state.searchedMeals);
  function searchMeals() {
      if (keyword.value) {
          store.dispatch("searchMeals", keyword.value);
      } else {
          store.commit("setSearchedMeals", []);
      }
  }

  onMounted(() => {
      keyword.value = route.params.name
      if (keyword.value) {
          searchMeals()
      }
  })
</script>