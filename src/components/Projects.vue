<script setup>
import ProjectCart from "./ProjectCart.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const websites = ref([]);
const API = ref(import.meta.env.VITE_API_KEY);

const getData = () => {
  try {
    setTimeout(async () => {
      const res = await axios.get(
        "https://mocki.io/v1/c9eb97bb-b394-4c1b-b4fc-3697fc4c33fe"
      );
      websites.value = res.data.websites;
    }, 1500);
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div>
    <div class="text-center mb-6 md:mb-[96px]">
      <h2 class="text-[48px] font-bold text-[#42446E]">Projects</h2>
      <p class="text-[32px] text-[#666666] font-normal">
        Things I’ve built so far
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProjectCart v-for="web in websites" :key="web.id" :web="web" />
    </div>
    <!-- SPINNER ORBITS -->
    <div v-if="websites.length === 0" class="spinner-box">
      <div class="blue-orbit leo"></div>
      <div class="green-orbit leo"></div>
      <div class="red-orbit leo"></div>
      <div class="white-orbit w1 leo"></div>
      <div class="white-orbit w2 leo"></div>
      <div class="white-orbit w3 leo"></div>
    </div>
  </div>
</template>

<style>
/* ALTERNATING ORBITS */
.spinner-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 50px;
}

.leo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.blue-orbit {
  width: 165px;
  height: 165px;
  border: 1px solid #01aaffd4;
  -webkit-animation: spin3D 3s linear 0.2s infinite;
}

.green-orbit {
  width: 120px;
  height: 120px;
  border: 1px solid #00ff6aa5;
  -webkit-animation: spin3D 2s linear 0s infinite;
}

.red-orbit {
  width: 90px;
  height: 90px;
  border: 1px solid #ff8400a5;
  -webkit-animation: spin3D 1s linear 0s infinite;
}

.white-orbit {
  width: 60px;
  height: 60px;
  border: 2px solid #ff7272;
  -webkit-animation: spin3D 4s linear 0s infinite;
}

.w1 {
  transform: rotate3D(1, 1, 1, 90deg);
}

.w2 {
  transform: rotate3D(1, 2, 0.5, 90deg);
}

.w3 {
  transform: rotate3D(0.5, 1, 2, 90deg);
}

@keyframes spin3D {
  from {
    transform: rotate3d(0.5, 0.5, 0.5, 360deg);
  }

  to {
    transform: rotate3d(0deg);
  }
}</style>
