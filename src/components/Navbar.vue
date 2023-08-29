<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import BurgerMenuItem from "./BurgerMenuItem.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log("ok");
  console.log(isOpen.value);
};

const items = ref([
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
      <div>
        <div class="block md:hidden z-20" @click="toggleMenu">
          <div class="w-[30px] h-[2px] bg-black"></div>
          <div class="w-[30px] h-[2px] bg-black mt-1 mb-1"></div>
          <div class="w-[30px] h-[2px] bg-black"></div>
        </div>
        <div :class="{ open: isOpen }" class="gap-[45px] hidden md:flex">
          <BurgerMenuItem v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.open {
  margin-top: 80px;
  width: 100%;
  height: 90dvh;
  padding: 15px 0;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 10;
}
</style>
