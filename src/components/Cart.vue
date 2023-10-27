<template>
  <div class="absolute top-24 left-0 w-full h-full" v-if="openCartNavbar">
  <div class="absolute top-0 left-0 bg-gray-500 opacity-70 w-full h-full" @click="mealsCart()"></div>
  <div class="absolute right-0 bg-gray-100 px-6 py-8 shadow-lg shadow-gray-500/50 w-1/4" >
  <div class="close absolute top-0 -left-8 w-8 h-8 cursor-pointer bg-gray-200 flex items-center	justify-center hover:bg-red-500	hover:text-white"
  @click="mealsCart()"><span>x</span></div>
  <div v-if="!cardMeals.length" class="flex justify-center text-gray-600 p-8 w-full h-full">
    is empty!
  </div>
    <ul v-else>
        <li v-for="cardMeal of cardMeals" :id="cardMeal.id" :key="cardMeal.id" class="flex flex items-center mb-2">
          <router-link :to="{name: 'mealDetails', params: { id: cardMeal.id }}"><img :src="cardMeal.img" :alt="cardMeal.name" class="max-h-24 w-full object-cover"></router-link>
          <h3 class="w-1/3 mx-2">{{ cardMeal.name }}</h3>
          <span class="w-1/3">{{cardMeal.qty}}x{{cardMeal.price}} = {{cardMeal.totalPrice}}</span>
          <button @click="mealsRemove(cardMeal.id)"><span class="bg-gray-200 mx-2 px-2 py-1 hover:bg-red-500	hover:text-white" >X</span></button>
        </li>
    </ul>
  <div class="total flex pb-24 text-xl"><h2>total: </h2> {{ totalPrice }}</div>
  </div>
  </div>
</template>
<script setup>
    import { onMounted, ref, computed, watchEffect} from 'vue';
    import store from "../store";

    const totalPrice = ref(0);
    const cardMeals = ref([]);
    let openCartNavbar = ref(store.state.openCart.openCartNavbar);

    watchEffect(() =>  {
        openCartNavbar.value = store.state.openCart.openCartNavbar;
        cardMeals.value = store.state.cart;
        const ids = JSON.parse(localStorage.getItem('cart')) || [];
        let sum = ref(0);
        for (var i=0; i < ids.length; i++)  {
            sum.value += parseInt(ids[i].totalPrice);
        }
        totalPrice.value = sum;

        // countCartNavbar.value = store.state.cart.length;
    });

    function mealsCart() {
        store.commit('openCart', false);
    }
    function mealsRemove(id) {
        const ids = JSON.parse(localStorage.getItem('cart')) || [];
        ids.splice(ids.findIndex(e => e.id === id),1);
        localStorage.setItem('cart', JSON.stringify(ids));
        for (var i=0; i < ids.length; i++)  {
            totalPrice.value += parseInt(ids[i].totalPrice);
        }
        store.commit('setCart', ids);
    }
</script>