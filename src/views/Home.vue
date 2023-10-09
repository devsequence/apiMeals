<template>
  <div class="flex flex-wrap h-screen px-2 py-8">
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
  import Meals from "../components/Meals.vue";
  import { onMounted, ref} from 'vue';
  import axiosClient from "../axiosClient.js";
  const meals = ref([]);

  onMounted(() => {
      for (let i = 0; i < 8; i++) {
          axiosClient
            .get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(({ data }) => meals.value.push(data.meals[0]))
        }
  });

</script>
<style> </style>