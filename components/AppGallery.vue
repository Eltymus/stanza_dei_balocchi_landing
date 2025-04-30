<template>
  <div
    :class="
      right
        ? 'flex flex-col max-w-7xl mx-auto md:flex-row shadow-inner bg-white '
        : 'flex flex-col max-w-7xl mx-auto md:flex-row-reverse shadow-inner bg-white '
    "
  >
    <div
      class="flex flex-col text-center justify-center items-center md:w-1/2 m-4"
    >
      <h2 class="text-3xl font-extrabold p-5">
        {{ title }}
      </h2>
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
const props = defineProps({
  title: String,
  subtitle: String,
  right: Boolean,
  image1: String,
  image2: String,
  image3: String,
});
</script>
