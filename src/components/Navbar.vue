<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import MenuItem from "./MenuItem.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const items = ref([
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Projects", link: "/projects" },
  { id: 4, title: "Contact", link: "/contact" },
]);
</script>

<template>
  <div>
    <nav class="flex justify-between items-center h-[80px]">
      <router-link to="/" class="text-3xl font-semibold text-[#1E0E62] relative">
        ideapad
      </router-link>
      <div>
        <a class="text-[#1E0E62] font-semibold border-b-2 border-[#1E0E62]" target="_blank"
          href="https://gamejskn.netlify.app/">TryMyParticleEffect</a>
      </div>
      <div>
        <div v-if="isOpen" @click="toggleMenu" class="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px">
            <path
              d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" />
          </svg>
        </div>
        <div v-else class="block md:hidden" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
            <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
            <path opacity="0.5" d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
            <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
        <div :class="{ open: isOpen }" class="gap-[45px] hidden md:flex">
          <MenuItem @click="isOpen = false" v-for="item in items" :key="item.id" :item="item" />
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
  background-color: rgba(0, 0, 0, 0.97);
  z-index: 10;
  transition: all 1s;
}
</style>
