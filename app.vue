<script setup lang="ts">
import { _right } from "#tailwind-config/theme/backgroundPosition";
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
        :right="true"
        :title="'Eventi per i ragazzi'"
        :subtitle="'Organizzazione di eventi settimanali per unire chi fa parte della stanza e aiutarli a sviluppare nuove abilità.'"
        :image1="'/img/ragazzi1.jpg'"
        :image2="'/img/ragazzi2.jpg'"
        :image3="'/img/ragazzi3.jpg'"
      />
      <AppGallery
        :right="false"
        :title="'Eventi per i genitori'"
        :subtitle="'Genitori uniti per migliorare la qualità di vita dei figli.'"
        :image1="'/img/genitori1.jpg'"
        :image2="'/img/genitori2.jpg'"
        :image3="'/img/genitori4.jpg'"
      />
    </NuxtLayout>
  </div>
</template>
