<script setup lang="ts">
import AppGallery from "./components/AppGallery.vue";
</script>

<template>
  <div>
    <NuxtLayout>
      <AppTitle
        :title="'La stanza dei Balocchi'"
        :subtitle="'Attività ludico educative per bambini e ragazzi autistici e con altre disabilità '"
        imageBg="'/img/Mano colorata senza sfondo.png'"
      />
      <AppGallery
        :title="'Eventi per i ragazzi'"
        :subtitle="'Organizzazione di eventi settimanali per unire chi fa parte della stanza e aiutarli a sviluppare nuove abilità.'"
        :image1="'/img/ragazzi1.jpg'"
        :image2="'/img/ragazzi2.jpg'"
        :image3="'/img/ragazzi3.jpg'"
      />
    </NuxtLayout>
  </div>
</template>
