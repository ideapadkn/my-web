<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
// import db from "../../db";

const skills = ref([]);

const getSkillsData = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/ed3bd011-0aa4-4db8-8c71-7443c3f2e12d"
    );
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
