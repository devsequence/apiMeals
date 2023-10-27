<template>
  <Navbar />
  <div class="bg-gray-100 h-auto">
    <router-view />
  </div>
  <Cart />
</template>
<script setup>
  import Navbar from '../components/Navbar.vue'
  import Cart from '../components/Cart.vue'
</script>