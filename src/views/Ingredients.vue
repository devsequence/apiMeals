<template>
  <div v-if="loading" class="bg-gray-100 loader fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center	">
    <Preloader color="orange" scale=".6"/>
  </div>
  <div class="container mx-auto my-0">
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    </div>
    <div class="px-8">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full p-4"
        placeholder="Search for Ingredients"
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <a href="#" class="block bg-white rounded p-3 mb-3 shadow" @click.prevent="openIngredientItem(item)"
           v-for="item in ingredients"
           :key="item.idIngredient">
                    <h3 class="text-xl font-bold mb-2">{{ item.strIngredient }}</h3>
                    <img class="w-24" :src="urlImage+item.strIngredient+`-Small.png`" alt="">
        </a>
      </div>
      <div class="flex justify-between py-3 my-3">
<!--        <button @click="backPage">prev</button>-->
<!--        <div class="items flex justify-between py-3 my-3">-->
<!--          <button-->
<!--            v-for="item in Math.ceil(computedIngredients.length / perPage)"-->
<!--            :key="item"-->
<!--            :class="{active}"-->
<!--            @click="() => goToPage(item)"-->
<!--            class="hover:text-orange-500 mx-2">-->
<!--            {{ item }}-->
<!--          </button>-->
<!--        </div>-->
<!--        <button @click="nextPage">next</button>-->
      </div>
    </div>
  </div>
</template>

<script setup>
    const loading = ref(true);
    const  mainUrl = import.meta.env.VITE_BASE_API;
    const  urlImage = import.meta.env.VITE_BASE_API_IMAGE_INGREDIENTS;
    import { computed } from "vue";
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";
    import axiosClient from "../axiosClient";
    import store from "../store";
    const router = useRouter();
    const keyword = ref("");
    const ingredients = ref([]);
    const  active  = false;
    const computedIngredients = computed(() => {
        if (!computedIngredients) return ingredients;
        return ingredients.value.filter((i) =>
            i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
        );
    });
    // const paginatedData = computed(() =>
    //     computedIngredients.value.slice((page.value - 1) * perPage, page.value * perPage)
    // );
    function openIngredientItem(item) {
        store.commit('setIngredient', item)
        router.push({
            name: "byIngredient",
            params: { ingredient: item.strIngredient },
        });
    }
    onMounted(() => {
        axiosClient.get(mainUrl+`list.php?i=list`).then(({ data }) => {
            ingredients.value = data.meals;
            loading.value = false;
        });
    });
    const currentPage = ref(1)
    // let page = ref(1);
    // const perPage = 16;
    // const nextPage = () => {
    //     if (page.value !== Math.ceil(computedIngredients.value.length / perPage)) {
    //         page.value += 1;
    //     }
    // };
    // const backPage = () => {
    //     if (page.value !== 1) {
    //         page.value -= 1;
    //     }
    // };
    //
    // const goToPage = (numPage) => {
    //     page.value = numPage;
    //     loading.value = true;
    //     setTimeout(function() {
    //         loading.value = false;
    //     }, 3000);
    // };
    //
    // const showMobileMenu = ref(false);
    // function filtersTest(item) {
    //     this.page = [];
    //     const min = item +3;
    //     const  max = this.item - 2 ;
    //     for (let i = max; i < min; i++){
    //         if (i>0 && i<=this.pages){
    //             this.page.push(i);
    //         }
    //     }
    // }

</script>