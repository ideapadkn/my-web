<script setup>
import Skill from "../components/Skill.vue";
import Projects from "../components/Projects.vue";
</script>

<template>
  <div class="mt-5 md:mt-16 mb-10 md:mb-[200px]">
    <h1 class="title text-[38px] sm:text-[58px] font-bold text-[#42446E] mb-5">
      Hi 👋,<br />
      My name is<br />
      <span class="span">Kamron</span><br />
      I make things for web
    </h1>
    <a target="_blank"
      class="cv-btn inline-block bg-yellow-400 hover:bg-yellow-500 rounded-2xl p-3 text-white hover:translate-x-3"
      href="https://github.com/ideapadkn/my-web/blob/main/src/assets/cv/Karimov%20Kamron.pdf">Download CV</a>
  </div>
  <div class="text-center mb-5 md:mb-[80px]">
    <h2 class="text-[48px] font-bold text-[#42446E]">My Tech Stack</h2>
    <p class="text-[32px] text-[#666666] font-normal mb-6 md:mb-[96px]">
      Technologies I’ve been working with recently
    </p>
    <div class="flex flex-wrap justify-between">
      <Skill />
    </div>
  </div>
  <div>
    <Projects />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 5px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: linear-gradient(45deg,
      #330867 0%,
      #6612cd 35%,
      #249d9d 66%,
      #30cfd0 100%);
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}

.cv-btn {
  transition: all .5s;
}

span {
  transform: translateX(-50%) translateY(-50%);
  background-image: linear-gradient(45deg,
      #30cfd0 0%,
      #249d9d 35%,
      #6612cd 66%,
      #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3.5s linear infinite;
  background-size: 200%;
}

@-webkit-keyframes glow {
  0% {
    background-position: 0% 43%;
  }

  50% {
    background-position: 100% 58%;
  }

  100% {
    background-position: 0% 43%;
  }
}

@keyframes glow {
  0% {
    background-position: 0% 43%;
  }

  50% {
    background-position: 100% 58%;
  }

  100% {
    background-position: 0% 43%;
  }
}
</style>
