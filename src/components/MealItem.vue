<template>
  <div class="w-1/1 sm:w-1/3 md:w-1/4 mb-4 px-2">
    <div class="rounded-lg border border-slate-200	overflow-hidden" :id="meal.idMeal">
      <router-link :to="{name: 'mealDetails', params: { id: meal.idMeal }}"><img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-h-48 w-full object-cover"></router-link>
      <h3 class="mx-2 mb-3">{{ meal.strMeal }}</h3>
      <div class="flex mx-2 mb-3">
        <div class="w-1/2">
          price: {{meal.idMeal - 52500}}
        </div>
        <div class="qtySelector flex  w-1/2">
          <button class="bg-gray-200 mx-2 px-2 py-1 hover:bg-red-500	hover:text-white quantity-btn__sub w-1/3" @click="calcQuantitySub()">-</button>
          <input type="number" class="qtyValue w-1/3 text-center" min="1" :value="valueItem">
          <button class="bg-gray-200 mx-2 px-2 py-1 hover:bg-red-500	hover:text-white quantity-btn__add w-1/3" @click="valueItem++">+</button>
        </div>
      </div>
      <a :href="meal.strYoutube" target="_blank" class="inline-flex border rounded-sm border-red-500 p-2	hover:bg-red-500	hover:text-white mx-2 mb-2">YouTube</a>
      <a @click.prevent="addToCart(meal.idMeal)" href="#" class="inline-flex border rounded-sm border-orange-500 p-2	hover:bg-orange-500	hover:text-white mx-2 mb-2">Add to cart</a>
    </div>
  </div>
</template>
<script setup>
  import axiosClient from "../axiosClient.js";
  const  mainUrl = import.meta.env.VITE_BASE_API;
  const cardQtys = ref([]);
  const cardMeals = ref([]);
  const valueItem = ref(1);
  import $ from 'jquery'
  import { onMounted, ref, computed, watch} from 'vue';
  const { meal } = defineProps({
      meal: {
          required: true,
          type: Object,
          error: false,
          quantity: 1
      }
  });
  const quantity = ref(1);
  function calcQuantitySub() {
      if(valueItem.value <= 1){}else {
          valueItem.value--
      }
  }
  function calcQuantityAdd() {
      console.log('plus');
  }
  function addToCart(id){
      let cart  = localStorage.getItem('cart');
      let qty = valueItem.value;
      // let qty = $('.qtyValue').val() ? $('.qtyValue').val() : 1;
      $('.qtyValue').val(1);
      let price = id- 52500;
      let newMeal = [{
              'id': id,
              'qty': qty,
              'price' : price,
              'totalPrice' : qty * price
      }];
      if(!cart){
          localStorage.setItem('cart', JSON.stringify(newMeal))
      }else{
          cart  = JSON.parse(cart);
          cart.forEach(productInCart => {
             if(productInCart.id === id){
                 productInCart.qty = Number(productInCart.qty) + Number(qty);
                 productInCart.totalPrice = Number(productInCart.qty) * Number(price);

                 newMeal = null;
             }
          });
          Array.prototype.push.apply(cart, newMeal);
          console.log(cart);
          localStorage.setItem('cart', JSON.stringify(cart));
      }
  }
</script>
<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>