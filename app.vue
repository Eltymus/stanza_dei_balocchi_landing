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
        :image1="'/img/genitori3.jpg'"
        :image2="'/img/genitori7.jpg'"
        :image3="'/img/genitori5.jpg'"
      />
      <AppSocialbar imageBg="'/img/Mano colorata senza sfondo.png'" />
    </NuxtLayout>
  </div>
</template>
