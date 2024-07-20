<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const skills = ref([]);
const API = ref(import.meta.env.VITE_API_KEY);

const getSkillsData = async () => {
  try {
    const res = await axios.get("https://mocki.io/v1/c9eb97bb-b394-4c1b-b4fc-3697fc4c33fe");
    skills.value = res.data.skills;
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  getSkillsData();
});
</script>

<template>
  <div class="grid grid-cols-1 gap-6" v-for="skill in skills" :key="skill.id">
    <img class="w-[100px] mb-5" :src="skill.img" alt="" />
  </div>
</template>
