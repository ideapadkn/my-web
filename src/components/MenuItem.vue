<script setup>
import { defineProps, ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="text-[20px] text-[#666666] hover:text-[#1e0e62] font-semibold transition-all"
  >
    <router-link active-class="active" :to="item.link">{{ item.title }}</router-link>
  </div>
</template>

<style>
.active {
  color: #1e0e62;
}
</style>
