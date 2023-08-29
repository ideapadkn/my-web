<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
// import db from "../../db";

const skills = ref([]);

const getSkillsData = async () => {
  try {
    const res = await axios.get("../db.json");
    skills.value = res.data.skills;
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
