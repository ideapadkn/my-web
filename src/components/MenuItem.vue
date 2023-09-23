<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="text-[20px] text-[#666666] hover:text-[#1e0e62] font-semibold transition-all">
    <router-link active-class="active" :to="item.link">{{ item.title }}</router-link>
  </div>
</template>

<style>
.active {
  transform: translateX(-50%) translateY(-50%);
  background-image: linear-gradient(45deg,
      #30cfd0 0%,
      #249d9d 35%,
      #6612cd 66%,
      #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3.5s linear infinite;
  background-size: 200%;
}
</style>
