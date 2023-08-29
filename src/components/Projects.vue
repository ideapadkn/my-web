<script setup>
import ProjectCart from "./ProjectCart.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
// import db from "../../db";
const websites = ref([]);

const getData = async () => {
  try {
    // console.log("db", db);
    const res = await axios.get("../db.json");
    websites.value = res.data.websites;
    console.log(res);
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
    <div class="text-center mb-[96px]">
      <h2 class="text-[48px] font-bold text-[#42446E]">Projects</h2>
      <p class="text-[32px] text-[#666666] font-normal">
        Things I’ve built so far
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <ProjectCart v-for="web in websites" :key="web.id" :web="web" />
    </div>
  </div>
</template>
