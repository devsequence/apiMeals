<template>
  <div v-if="loading" class="bg-gray-100 loader fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center	">
    <Preloader color="orange" scale=".6"/>
  </div>
  <div class="container mx-auto my-0">
    <div v-if="meals.length > 0" class="inner flex flex-wrap h-screen px-2 py-8">
      <Meals :meals="meals" />
    </div>
    <ul v-else class="flex flex-wrap h-screen px-2 py-8">
      <li>{{testErrors[0]}}</li>
    </ul>
  </div>
</template>
<script setup>
  import Meals from "../components/Meals.vue";
  import { onMounted, ref, computed} from 'vue';
  import axiosClient from "../axiosClient.js";
  const  mainUrl = import.meta.env.VITE_BASE_API;
  const meals = ref([]);
  import store from "../store";
  const cardMeals = ref([]);

  const testErrors = ref([]);


  const loading = ref(true);

  const cart = ref(true);
  const cartInfo = computed(() => store.state.cart);





  import Preloader from '../components/Preloader.vue'
  onMounted(async () => {
      for (let i = 0; i < 8; i++) {
          axiosClient
              .get(mainUrl+`random.php`)
              .then( response => {
                  meals.value.push(response.data.meals[0]);
              })
              .catch(error => {
                  testErrors.value.push(error.message);
              })
              .finally(function () {
                  if(meals.value.length === 8){
                      loading.value = false;
                  }
              });
        }
      // function mealsRemove() {
          // console.log(id);
          // const ids = JSON.parse(localStorage.getItem('cart')) || [];
          // console.log(ids);
          // ids.splice(ids.findIndex(e => e.item.id === id),1);
          // localStorage.setItem('cart', JSON.stringify(ids));
      // }
      // const cartCount = JSON.parse(localStorage.getItem('cart')) || [];
      // for (var i=0; i<cartCount.length; i++)  {
      //     axiosClient
      //         .get(mainUrl+`lookup.php?i=`+parseInt(cartCount[i].id))
      //         .then( response => {
      //             cardMeals.value.push(response.data.meals[0]);
      //         });
      //
      //     // cardQtys.value.push(cartCount[i].qty);
      //     // cardPrice.value.push(cartCount[i].price);
      //     // cardTotalPrice.value.push(cartCount[i].totalPrice);
      //     // totalPrice.value += parseInt(cartCount[i].totalPrice);
      // }
  });
  // function updateCart() {
  //     const cartCount = JSON.parse(localStorage.getItem('cart')) || [];
  //     for (var i=0; i<cartCount.length; i++)  {
  //         axiosClient
  //             .get(mainUrl+`lookup.php?i=`+parseInt(cartCount[i].id))
  //             .then( response => {
  //                 cardMeals.value.push(response.data.meals[0]);
  //             });
  //         cardQtys.value.push(cartCount[i].qty);
  //         cardPrice.value.push(cartCount[i].price);
  //         cardTotalPrice.value.push(cartCount[i].totalPrice);
  //         totalPrice.value += parseInt(cartCount[i].totalPrice);
  //     }
  // }
  //
  // function openCart() {
  //     updateCart();
  //     cart.value = true;
  // }
  // function closeCart() {
  //     updateCart();
  //     cart.value = false;
  // }
</script>
<style></style>