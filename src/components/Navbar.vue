<script setup>
import { RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import BurgerMenuItem from "./BurgerMenuItem.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log('ok')
};

const items = reactive([
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Projects", link: "/projects" },
  { id: 4, title: "Contact", link: "/contact" },
]);
</script>

<template>
  <div class="">
    <nav class="flex justify-between items-center h-[80px]">
      <router-link to="/" class="text-3xl font-semibold text-[#1E0E62]"
        >ideapad</router-link
      >
      <div :class="{ open: isOpen }">
        <div class="block md:hidden" @click="toggleMenu">
          <div class="w-[30px] h-[2px] bg-black"></div>
          <div class="w-[30px] h-[2px] bg-black mt-1 mb-1"></div>
          <div class="w-[30px] h-[2px] bg-black"></div>
        </div>
        <div class="gap-[45px] hidden md:flex">
          <BurgerMenuItem v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>
    </nav>
  </div>
</template>
