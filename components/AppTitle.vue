<template>
  <div class="max-w-7xl mx-auto">
    <div :style="{ backgroundImage: `url(${imageBg})` }" class="bg-cover">
      <div
        class="backdrop-blur-sm items-center text-center justify-center flex flex-col"
      >
        <h1 class="font-bold text-6xl p-10 m-3">
          {{ title }}
        </h1>

        <h2
          class="font-semibold text-xl bg-contain md:w-1/2 sm:w-full p-10 md:p-1 sm:p-1"
        >
          {{ subtitle }}
        </h2>

        <img :src="heroImg" :alt="altImg" class="w-96" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "imageBg", "heroImg", "altImg"],
};
</script>
