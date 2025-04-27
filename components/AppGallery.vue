<template>
  <div
    class="flex flex-col max-w-7xl mx-auto md:flex-row shadow-inner bg-white bg-gradient-to-r from-slate-50 to-lime-100"
  >
    <div
      class="md:w-1/2 sm:w-full flex flex-col items-center text-center justify-center p-10"
    >
      <h2 class="text-3xl font-extrabold p-5">Eventi per i ragazzi</h2>
      <p>
        Organizzazione di eventi settimanali per unire chi fa parte della stanza
        e aiutarli a sviluppare nuove abilità.
      </p>
    </div>

    <div class="flex flex-col md:w-1/2 sm:w-fit m-4">
      <Carousel v-bind="galleryConfig" v-model="currentSlide">
        <Slide v-for="image in images" :key="image.id">
          <img
            :src="image.url"
            alt="Immagine eventi dei ragazzi"
            class="rounded-3xl m-4 p-2 border-2 bg-white lg:rotate-3"
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
                class="rounded-3xl p-2 border-2 bg-white"
              />
            </div>
          </template>
        </Slide>

        <template #addons> </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";

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
    url: "/img/ragazzi1.jpg",
  },
  {
    id: 2,
    url: "/img/ragazzi2.jpg",
  },
  {
    id: 3,
    url: "/img/ragazzi3.jpg",
  },
];
</script>
