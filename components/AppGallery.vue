<template>
  <div
    class="flex flex-col max-w-7xl mx-auto md:flex-row shadow-inner bg-white bg-gradient-to-r from-slate-50 to-lime-100"
  >
    <div
      class="md:w-1/2 sm:w-full flex flex-col items-center text-center justify-center p-10"
    >
      <h2 class="text-3xl font-extrabold p-5">{{ title }}</h2>
      <p>
        {{ subtitle }}
      </p>
    </div>

    <div class="flex flex-col md:w-1/2 sm:w-fit m-4">
      <AppCarousel :image1="image1" :image2="image2" :image3="image3" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  image1: String,
  image2: String,
  image3: String,
});
</script>
