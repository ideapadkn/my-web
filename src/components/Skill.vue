<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const skills = ref([]);

const getSkillsData = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/skills`);
    skills.value = res.data;
    // console.log(skills);
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
