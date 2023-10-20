<template>
  <div v-if="loading" class="bg-gray-100 loader fixed top-0 left-0 right-0 h-screen w-full flex items-center justify-center	">
    <Preloader  color="orange" scale=".6"/>
  </div>
  <div class="container mx-auto my-0">
    <div v-if="meals.length > 0" class="inner flex flex-wrap h-screen px-2 py-8">
      <Meals :meals="meals" />
    </div>
    <ul v-else class="flex flex-wrap h-screen px-2 py-8">
      <li>{{testErrors[0]}}</li>
    </ul>
  </div>
  <button @click="openCart()">open cart</button>
  <div class="cart mb-24" v-if="cart">
    <div class="container mx-auto my-0">
    <ul>
      <li v-for="(cardMeal, index) of cardMeals" :id="cardMeal.idMeal" :key="cardMeal.idMeal" class="flex flex items-center mb-2">
        <router-link :to="{name: 'mealDetails', params: { id: cardMeal.idMeal }}"><img :src="cardMeal.strMealThumb" :alt="cardMeal.strMeal" class="max-h-24 w-full object-cover"></router-link>
        <h3 class="mx-2">{{ cardMeal.strMeal }}</h3>
        <span>{{cardQtys[index]}}x{{cardPrice[index]}} = {{cardTotalPrice[index]}}</span>
        <button @click="cardMeals.splice(index, 1)"><span class="bg-gray-200 mx-2 px-2 py-1 hover:bg-red-500	hover:text-white" @click="mealsRemove(cardMeal.idMeal)">X</span></button>
      </li>
    </ul>
    <div class="total flex pb-24 text-xl"><h2>total: </h2> {{ totalPrice }}</div>
    </div>
  </div>
</template>
<script setup>
  import Meals from "../components/Meals.vue";
  import { onMounted, ref, computed} from 'vue';
  import axiosClient from "../axiosClient.js";
  const  mainUrl = import.meta.env.VITE_BASE_API;
  const meals = ref([]);
  const totalPrice = ref(0);
  const cardQtys = ref([]);
  const cardPrice = ref([]);
  const cardTotalPrice = ref([]);

  const cardMeals = ref([]);
  const testErrors = ref([]);
  const loading = ref(true);
  const cart = ref(false);

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


  });
  function updateCart() {
      const cartCount = JSON.parse(localStorage.getItem('cart')) || [];
      for (var i=0; i<cartCount.length; i++)  {
          axiosClient
              .get(mainUrl+`lookup.php?i=`+parseInt(cartCount[i].id))
              .then( response => {
                  cardMeals.value.push(response.data.meals[0]);
              });
          cardQtys.value.push(cartCount[i].qty);
          cardPrice.value.push(cartCount[i].price);
          cardTotalPrice.value.push(cartCount[i].totalPrice);
          totalPrice.value += parseInt(cartCount[i].totalPrice);
      }
      // for (var int=0; i<cartCount.length; int++)  {
      //     totalPrice.value += parseInt(ids[int].item.priceTotal);
      //
      // }
      // const totalPrice =
  }
  function mealsRemove(id) {
      const ids = JSON.parse(localStorage.getItem('cart')) || [];
      ids.splice(ids.findIndex(e => e.id === id),1);
      localStorage.setItem('cart', JSON.stringify(ids));
      cardMeals.splice(index, 1);
      const cartCount = JSON.parse(localStorage.getItem('cart')) || [];
      for (var i=0; i<cartCount.length; i++)  {
          totalPrice.value += parseInt(cartCount[i].totalPrice);
      }

  }
  function openCart() {
      updateCart();
      cart.value = true;
  }
</script>
<style> </style>