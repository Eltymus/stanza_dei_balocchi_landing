<template>
  <div class="flex flex-col bg-blue-700 max-w-7xl mx-auto text-white">
    <!-- Parte Social -->
    <div class="flex flex-col items-center justify-center">
      <p class="mt-7 font-bold text-lg">Proprietà di "Stanza dei Balocchi"</p>
      <div class="flex flex-row">
        <AppSocialCard
          :small="true"
          :sociallink="'https://www.facebook.com/lastanzadeibalocchinoprofit/?locale=it_IT'"
          :socialicon="['fab', 'facebook-f']"
        />
        <AppSocialCard
          :small="true"
          :sociallink="'https://www.instagram.com/_la_stanza_dei_balocchi/'"
          :socialicon="['fab', 'instagram']"
        />
      </div>
      <p class="text-sm">associazione no profit per il sociale</p>
      <AppPrivacyPolicy />
    </div>

    <button
      @click="showDevInfo = !showDevInfo"
      class="mt-4 flex items-center justify-center text-sm font-bold bg-black hover:bg-gray-800 px-4 py-2 transition-colors"
    >
      <span class="mr-2"> Developer information </span>
      <span> </span>
    </button>

    <div
      class="overflow-hidden transition-all duration-500 ease-in-out bg-black"
      :class="showDevInfo ? 'max-h-96 py-6' : 'max-h-0 py-0'"
    >
      <div class="flex flex-col items-center justify-center">
        <p class="font-medium text-lg">Social dello sviluppatore</p>
        <div class="flex flex-row">
          <AppSocialCard
            :small="true"
            :sociallink="'https://www.linkedin.com/in/lorenzo-tripodi-1173aa1b3/'"
            :socialicon="['fab', 'linkedin']"
          />
          <AppSocialCard
            :small="true"
            :sociallink="'https://github.com/Eltymus'"
            :socialicon="['fab', 'github']"
          />
        </div>
        <p class="text-sm">Sviluppato da Lorenzo Tripodi</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showDevInfo = ref(false);
</script>
