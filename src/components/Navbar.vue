<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const menuVisible = ref(false);
const openMenu = () => {
  menuVisible.value = true;
};
</script>

<template>
  <div class="">
    <nav class="flex justify-between items-center h-[80px]">
      <Router-Link to="/" class="text-3xl font-semibold text-[#1E0E62]"
        >ideapad</Router-Link
      >
      <ul class="hidden md:flex gap-5">
        <li
          class="text-[20px] font-medium text-gray-500 hover:text-[#1E0E62] transition-all"
        >
          <Router-Link to="/"> Home </Router-Link>
        </li>
        <li
          class="text-[20px] font-medium text-gray-500 hover:text-[#1E0E62] transition-all"
        >
          <Router-Link to="/about"> About </Router-Link>
        </li>
        <li
          class="text-[20px] font-medium text-gray-500 hover:text-[#1E0E62] transition-all"
        >
          <Router-Link to="/projects"> Projects </Router-Link>
        </li>
        <li
          class="text-[20px] font-medium text-gray-500 hover:text-[#1E0E62] transition-all"
        >
          <Router-Link to="/contact"> Contact </Router-Link>
        </li>
      </ul>
      <div class="block md:hidden">
        <div class="w-[30px] h-[2px] bg-black"></div>
        <div class="w-[30px] h-[2px] bg-black mt-1 mb-1"></div>
        <div class="w-[30px] h-[2px] bg-black"></div>
      </div>
    </nav>
  </div>
</template>
