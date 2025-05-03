<template>
  <div>
    <NuxtLayout>
      <AppTitle
        :title="'La stanza dei Balocchi'"
        :subtitle="'Attività ludico educative per bambini e ragazzi autistici e con altre disabilità '"
        imageBg="'/img/Mano colorata senza sfondo.png'"
      />
      <AppSocialbar
        id="social"
        :title="'Unisciti a noi o aiutaci'"
        :subtitle="'Entra a far parte della stanza o contattaci se sei interessato a collaborare con noi'"
      />
      <AppGallery
        :right="true"
        :title="'Attività per i bambini e ragazzi'"
        :subtitle="'Organizzazione di eventi settimanali per unire chi fa parte della stanza e aiutarli a sviluppare nuove abilità.'"
        :image1="'/img/ragazzi1.jpg'"
        :image2="'/img/ragazzi2.jpg'"
        :image3="'/img/ragazzi3.jpg'"
      />
      <AppGallery
        :right="false"
        :title="'Attività per genitori e famiglie'"
        :subtitle="'Genitori uniti per migliorare la qualità di vita dei figli.'"
        :image1="'/img/genitori3.jpg'"
        :image2="'/img/genitori7.jpg'"
        :image3="'/img/genitori5.jpg'"
      />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title:
    "La Stanza dei Balocchi – Supporto alle famiglie con persone autistiche",
  ogTitle: "La Stanza dei Balocchi – Inclusione e supporto",
  description:
    "La Stanza dei Balocchi è un'associazione dedicata al supporto delle famiglie con persone autistiche. Scopri progetti, eventi e attività inclusive.",
  ogDescription:
    "Supportiamo le famiglie con persone autistiche attraverso iniziative sociali e culturali.",
  ogImage: "img/stanzadeibalocchi5x1000.jpg",
  ogUrl: "www.stanzadeibalocchi.it",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "La Stanza dei Balocchi",
  twitterDescription:
    "Un'associazione per famiglie con membri autistici. Scopri le nostre attività e unisciti a noi.",
  twitterImage: "img/stanzadeibalocchi5x1000.jpg",
});
</script>
