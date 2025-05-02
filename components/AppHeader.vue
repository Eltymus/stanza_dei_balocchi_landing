<template>
  <div class="bg-white w-full shadow-md">
    <div class="max-w-7xl mx-auto p-3 px-7 flex justify-between items-center">
      <div>
        <img
          src="/public/img/logo_stanza_dei_balocchi.jpg"
          alt="Immagine dell'impronta di una mano con le dita colorate."
          class="h-14"
        />
      </div>
      <a
        href="#"
        @click.prevent="scrollToSocial"
        class="p-3 font-bold hover:text-white hover:bg-blue-600 rounded-full delay-150 transition-colors text-center justify-center"
        >Contattaci</a
      >
    </div>
  </div>
</template>

<script setup>
const scrollToSocial = () => {
  const el = document.getElementById("social");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
