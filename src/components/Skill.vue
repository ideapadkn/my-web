<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const skills = ref([]);

const getSkillsData = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/0d0c6a89-6594-4344-a3fa-3459c8793993"
    );
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
