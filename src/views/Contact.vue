<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const number = ref("");
const text = ref("");

// FORM VALIDATION
const formValidation = () => {
  if (name.value === '' || number.value === '' || text.value === '') {
    return false
  } else {
    return true
  }
}

// FORM SEND
const TOKEN = ref("6425163772:AAHyG88r7j4_Cp20JhKvFOtvQWbmh3wDjkg");
const CHAT_ID = ref("-1001917766838");
const URI_API = ref(`https://api.telegram.org/bot${TOKEN.value}/sendMessage`);

const send = () => {
  let message = `<b>Someone wrote to you: </b>\n\n`;
  message += `<b>Name: </b> ${name.value}\n`;
  message += `<b>Number: </b> ${number.value}\n`;
  message += `<b>Text: </b> ${text.value}`;

  if (formValidation()) {
    // alert("Successful");
    axios
      .post(URI_API.value, {
        chat_id: CHAT_ID.value,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        name.value = "";
        number.value = "";
        text.value = "";
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log("end");
      });
  } else {
    console.log("error");
    alert('Please enter text')
  }
};
</script>

<template>
  <div class="flex justify-center flex-col items-center">
    <h1 class="md:text-[58px] text-[38px] font-bold text-[#42446E] mb-5">Contact Me</h1>
    <form @submit.prevent
      class="flex justify-between flex-col gap-5 py-8 px-4 border-2 mb-5 shadow-lg rounded-[20px] w-[300px]">
      <div class="flex justify-between flex-col relative">
        <input class="input border-b p-2 outline-none w-full bg-transparent" type="text" v-model="name" />
        <label class="label mb-2 font-semibold absolute left-0 bottom-0 transition-all">Name</label>
      </div>
      <div class="flex justify-between flex-col relative">
        <input class="input border-b p-2 outline-none w-full bg-transparent" type="tel" v-model="number" />
        <label class="label mb-2 font-semibold absolute left-0 bottom-0 transition-all">Phone Number</label>
      </div>
      <div class="flex justify-between flex-col relative">
        <input class="input border-b p-2 outline-none w-full bg-transparent" type="text" v-model="text" />
        <label class="label mb-2 font-semibold absolute left-0 bottom-0">Text</label>
      </div>
      <a @click="send()" class="cursor-pointer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Send
      </a>
    </form>
  </div>
</template>

<style scoped>
.label {
  transition: all 0.5s;
}

.input:valid~.label {
  top: -15px;
  left: 0;
  color: #42446e;
  font-size: 14px;
}

a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #42446e;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  text-align: center;
}

a:hover {
  background: #42446e;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 1px #42446e, 0 0 10px #42446e, 0 0 15px #42446e,
    0 0 20px #42446e;
}

a span {
  position: absolute;
  display: block;
}

a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #42446e);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #42446e);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #42446e);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #42446e);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}
</style>
