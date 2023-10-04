<template>
  <header class="bg-white shadow-md h-24 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="inline-flex items-center px-5">
      home
    </router-link>
    <div class="flex items-center gab-1">
      <router-link :to="{name: 'byName' }" class="inline-flex items-center transition-colors px-2 h-full  hover:bg-purple-100">Search Meals</router-link>
      <router-link :to="{name: 'byLetter' }" class="inline-flex items-center transition-colors px-2 h-full  hover:bg-purple-100">Meals By Letter</router-link>
      <router-link :to="{name: 'ingredients' }" class="inline-flex items-center transition-colors px-2 h-full  hover:bg-purple-100">Meals Ingredients</router-link>
    </div>
  </header>
</template>
<style>
  .router-link-active{
    color: blue;
  }
</style>