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
    console.log("fdfd");
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

  if (result) {
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
    <h1 class="text-[58px] font-bold text-[#42446E] mb-5">Contact Me</h1>
    <form
      @submit.prevent
      class="flex justify-between flex-col gap-5 p-4 border-2 mb-5 shadow-lg rounded-[20px]"
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
          class="border-2 border-gray-400 outline-none p-2 text-gray-400 w-[300px]"
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
      <button @click="send()" class="border-[#42446E] border-2 p-2 hover:bg-[#42446E] hover:text-white transition-all ">
        Send
      </button>
    </form>
    <div class="flex gap-5 items-center">
      <a
        class="w-[40px] hover:-translate-y-2 transition-transform"
        href="https://t.me/kn6429"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 50 50"
        >
          <path
            d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z"
          ></path>
        </svg>
      </a>
      <a
        class="w-[40px] hover:-translate-y-2 transition-transform"
        href="https://github.com/ideapadkn"
        target="_blank"
      >
        <svg
          height="36"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="40"
          data-view-component="true"
          class="octicon octicon-mark-github v-align-middle color-fg-default"
        >
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
          ></path>
        </svg>
      </a>
      <a
        class="w-[40px] hover:-translate-y-2 transition-transform"
        href="https://www.linkedin.com/in/ideapadkn/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          class="mercado-match"
          width="40"
          height="40"
          focusable="false"
        >
          <path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>
