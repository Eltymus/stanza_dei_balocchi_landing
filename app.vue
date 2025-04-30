<template>
  <div>
    <NuxtLayout>
      <AppTitle
        :title="'La stanza dei Balocchi'"
        :subtitle="'Attività ludico educative per bambini e ragazzi autistici e con altre disabilità '"
        imageBg="'/img/Mano colorata senza sfondo.png'"
      />
      <AppSocialbar
        :title="'Unisciti a noi o aiutaci'"
        :subtitle="'Entra a far parte della stanza o contattaci se sei interessato a collaborare con noi'"
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
    </NuxtLayout>
  </div>
</template>
