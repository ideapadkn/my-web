<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container mx-auto px-5">
    <Navbar />
    <RouterView />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 0;
}
::-webkit-scrollbar {
  width: 7px;
  background-color: #f9f9fd;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: linear-gradient(
    45deg,
    #330867 0%,
    #6612cd 35%,
    #249d9d 66%,
    #30cfd0 100%
  );
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}
</style>
