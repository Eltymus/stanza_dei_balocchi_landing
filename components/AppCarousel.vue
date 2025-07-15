<template>
  <Carousel v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="image in images" :key="image.id">
      <img
        :src="image.url"
        alt="Immagine eventi dei ragazzi"
        class="rounded-3xl m-4 p-2 border-2 border-gray-300 bg-white hover:shadow-xl duration-300 aspect-auto"
      />
    </Slide>
  </Carousel>

  <Carousel v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="image in images" :key="image.id">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="['thumbnail', { 'is-active': isActive }]"
          @click="slideTo(currentIndex)"
          class="justify-center items-center cursor-pointer"
        >
          <img
            :src="image.url"
            alt="Galleria immagini"
            class="rounded-3xl p-2 border-2 border-gray-300 bg-white aspect-square md:max-w-32 sm:max-w-28 hover:scale-105 hover:border-none duration-100"
          />
        </div>
      </template>
    </Slide>

    <template #addons> </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  image1: String,
  image2: String,
  image3: String,
});

const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: false,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
};

const thumbnailsConfig = {
  itemsToShow: 3,
  touchDrag: false,
  gap: 13,
};

const images = [
  {
    id: 1,
    url: props.image1,
  },
  {
    id: 2,
    url: props.image2,
  },
  {
    id: 3,
    url: props.image3,
  },
];
</script>
