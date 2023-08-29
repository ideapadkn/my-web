<script setup></script>

<template>
  <div class="mt-16 mb-[200px]">
    <h1 class="text-[38px] sm:text-[58px] font-bold text-[#42446E] mb-5">
      Hi 👋,<br />
      My name is<br />
      <span class="span">Kamron</span><br />
      I make things for web
    </h1>
    <a
      download
      class="inline-block bg-yellow-400 rounded-2xl p-3 text-white hover:translate-x-3 transition-all"
      href="../assets/cv/Kamron Karimov.pdf"
      >Download CV</a
    >
  </div>
  <div class="text-center">
    <h2 class="text-[48px] font-bold text-[#42446E]">My Tech Stack</h2>
    <p class="text-[32px] text-[#666666] font-normal">
      Technologies I’ve been working with recently
    </p>
    <div class="flex flex-wrap justify-between"></div>
  </div>
</template>

<style>
span {
  transform: translateX(-50%) translateY(-50%);
  font-size: 5rem;
  background-image: linear-gradient(
    45deg,
    #30cfd0 0%,
    #249d9d 35%,
    #6612cd 66%,
    #330867 100%
  );
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
