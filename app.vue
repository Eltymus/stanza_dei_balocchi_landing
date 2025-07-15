<template>
  <div>
    <NuxtLayout>
      <AppTitle
        :title="'La stanza dei Balocchi'"
        :subtitle="'Attività ludico educative per bambini e ragazzi autistici e con altre disabilità '"
        imageBg="'/img/Mano colorata senza sfondo.png'"
        :heroImg="'/img/logo_hero.png'"
        altImg="'Mani colorate con tempera e i palmi rivolti verso lo schermo'"
      />
      <AppSocialbar
        id="social"
        :title="'Unisciti a noi o aiutaci'"
        :subtitle="'Entra a far parte della stanza o contattaci se sei interessato a collaborare con noi'"
        bannerImg="/img/stanzadeibalocchi5x1000.jpg"
        altbannerImg="Immagine del banner per il 5x1000 della Stanza dei Balocchi"
      />
      <AppAboutUs
        imageBg="'/img/Mano colorata senza sfondo.png'"
        doc="/discorso.txt"
        author="Tiziana D. Clemente"
        title="Chi siamo"
        subtitle="Discorso della presidente in occasione della Giornata azzurra sull’autismo gestita dal tavolo di lavoro sulla disabilità del comune di Giaveno"
      />
      <AppGallery
        :right="true"
        :title="'Attività per i bambini e ragazzi'"
        :subtitle="'Organizzazione di eventi settimanali per unire chi fa parte della stanza e aiutarli a sviluppare nuove abilità.'"
        :image1="'/img/official_img_ragazzi_01.jpg'"
        :image2="'/img/official_img_ragazzi_02.jpg'"
        :image3="'/img/official_img_ragazzi_03.jpg'"
      />
      <AppGallery
        :right="false"
        :title="'Attività per genitori e famiglie'"
        :subtitle="'Genitori uniti per migliorare la qualità di vita dei figli.'"
        :image1="'/img/official_img_genitori_01.jpg'"
        :image2="'/img/official_img_genitori_02.jpg'"
        :image3="'/img/official_img_genitori_03.jpg'"
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
