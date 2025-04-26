<script setup lang="ts">
import AppGallery from './components/AppGallery.vue';

</script>

<template>
  <div>
    <NuxtLayout>
      <AppTitle
      :title = "'La stanza dei Balocchi'"
      :subtitle = "'Attività ludico educative per bambini e ragazzi autistici e con altre disabilità '"
      imageBg = "'/img/Mano colorata senza sfondo.png'"
      />
      <AppGallery/>
    </NuxtLayout>
  </div>
</template>
