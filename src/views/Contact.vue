<script setup>
import { ref } from "vue";
import axios from "axios";

// FORM VALIDATION
const name = ref("");
const email = ref("");
const text = ref("");
const result = ref(true);
function validation() {
  if (name.value && email.value && text.value === "") {
    result.value = false;
    console.log('fdfd')
  } else {
    console.log("error");
  }
}

// FORM SEND
const TOKEN = ref("6425163772:AAHyG88r7j4_Cp20JhKvFOtvQWbmh3wDjkg");
const CHAT_ID = ref("-1001917766838");
const URI_API = ref(`https://api.telegram.org/bot${TOKEN.value}/sendMessage`);

const send = () => {
  let message = `<b>Someone wrote to you: </b>\n\n`;
  message += `<b>Name: </b> ${name.value}\n`;
  message += `<b>Email: </b> ${email.value}\n`;
  message += `<b>Text: </b> ${text.value}`;

  if (validation(this) === true) {
    alert("Successful");
    axios
      .post(URI_API.value, {
        chat_id: CHAT_ID.value,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        name.value = "";
        email.value = "";
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
  }
};
</script>

<template>
  <div class="flex justify-center flex-col items-center h-[calc(100dvh-80px)]">
    <h1 class="text-[58px] font-bold text-[#1E0E62] mb-5">Contact me</h1>
    <form
      @submit.prevent
      class="flex justify-between flex-col gap-5 p-4 border-2 w-[800px]"
    >
      <div class="flex justify-between flex-col">
        <label class="mb-2">Name</label>
        <input
          class="border-2 border-gray-400 outline-none p-2 text-gray-400"
          type="text"
          placeholder="Your name"
          v-model="name"
        />
      </div>
      <div class="flex justify-between flex-col">
        <label class="mb-2">Email</label>
        <input
          class="border-2 border-gray-400 outline-none p-2 text-gray-400"
          type="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div class="flex justify-between flex-col">
        <label class="mb-2">Text</label>
        <input
          class="border-2 border-gray-400 outline-none p-2 text-gray-400"
          type="text"
          placeholder="Your text"
          v-model="text"
        />
      </div>
      <button @click="send()" class="border-[#1E0E62] border-2 p-2">Send</button>
    </form>
  </div>
</template>
