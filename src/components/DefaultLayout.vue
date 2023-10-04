<template>
  <Navbar />
  <div class="bg-gray-100 h-full ">
    <router-view />
  </div>
</template>
<script setup>
  import Navbar from '../components/Navbar.vue'
</script>