<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
</script>

<template>
  <div class="">
    <nav class="flex justify-between items-center h-[80px]">
      <Router-Link to="/" class="text-3xl font-semibold text-[#1E0E62]"
        >ideapad</Router-Link
      >
      <ul class="flex gap-5">
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
    </nav>
  </div>
</template>

<style>
.active {
  color: #1e0e62;
}
</style>
