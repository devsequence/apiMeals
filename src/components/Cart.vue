<!--<template>-->
<!--  <div class="cart">-->
<!--    <ul>-->
<!--      <li v-for="(cardMeal, index) of cardMeals" :id="cardMeal.idMeal" :key="cardMeal.idMeal" class="flex">-->
<!--        <h3 class="mx-2 mb-3">{{ cardMeal.strMeal }}</h3>-->
<!--        <span>{{cardQtys[index]}}x{{cardPrice[index]}} = {{cardTotalPrice[index]}}</span>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--    import { onMounted, ref} from 'vue';-->
<!--    import axiosClient from "../axiosClient.js";-->
<!--    const  mainUrl = import.meta.env.VITE_BASE_API;-->

<!--    const cardQtys = ref([]);-->
<!--    const cardPrice = ref([]);-->
<!--    const cardTotalPrice = ref([]);-->
<!--    const cardMeals = ref([]);-->

<!--    onMounted(async () => {-->
<!--        function updateCart() {-->
<!--            const cartCount = JSON.parse(localStorage.getItem('cart')) || [];-->
<!--            for (var i=0; i<cartCount.length; i++)  {-->
<!--                axiosClient-->
<!--                    .get(mainUrl+`lookup.php?i=`+parseInt(cartCount[i].id))-->
<!--                    .then( response => {-->
<!--                        cardMeals.value.push(response.data.meals[0]);-->
<!--                    });-->
<!--                cardQtys.value.push(cartCount[i].qty);-->
<!--                cardPrice.value.push(cartCount[i].price);-->
<!--                cardTotalPrice.value.push(cartCount[i].totalPrice);-->
<!--            }-->

<!--        }-->
<!--        updateCart();-->
<!--    })-->
<!--</script>-->