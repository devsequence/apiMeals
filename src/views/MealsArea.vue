<template>
  <div class="container mx-auto py-12 ">
    <div class="" v-for="area of areas" >
      <div class="flex flex-wrap px-6">
        <a href="#" class="block bg-white rounded p-3 mb-3 mx-2 shadow hover:bg-orange-500 hover:text-white"
           @click.prevent="openArea(item)" v-for="item in area"
           :key="item.strArea" :id="item.strArea">
            {{item.strArea}}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
    import {ref, onMounted } from 'vue'
    import { useRouter } from "vue-router";
    import store from "../store";
    const  mainUrl = import.meta.env.VITE_BASE_API;
    import axiosClient from "../axiosClient.js";
    const router = useRouter();
    const areas = ref([]);
    onMounted(() => {
        axiosClient
            .get(mainUrl+`list.php?a=list`)
            .then( response => {
                areas.value.push(response.data.meals);
            })
            .catch(error => {
                areas.value.push(error.message);
            })
            .finally(function () {});
    });
    function openArea(item) {
        store.commit('setSearchMealsByArea', item.strArea);
        router.push({
            name: "byArea",
            params: { area: item.strArea },
        });
    }
</script>