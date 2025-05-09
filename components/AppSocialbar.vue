<template>
  <div class="bg-cover bg-blue-700 max-w-7xl mx-auto">
    <div
      class="flex md:flex-row flex-col p-5 backdrop-blur-sm justify-center items-center"
    >
      <div
        class="flex flex-col md:w-1/3 sm:w-full text-center justify-center text-white p-4"
      >
        <h1 class="text-3xl font-extrabold p-5">
          {{ title }}
        </h1>
        <p>
          {{ subtitle }}
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <AppCopy
          :description="'Copia il codice fiscale per la tua dichiarazione dei redditi'"
          :socialicon="['fas', 'copy']"
          :contact="'95635720014'"
          :button="false"
        />
        <div class="flex flex-row">
          <AppCopy
            :socialicon="['fas', 'envelope']"
            :contact="'stanzadeibalocchi@gmail.com'"
            :button="true"
          />
          <AppSocialCard
            :small="false"
            :sociallink="'https://www.facebook.com/lastanzadeibalocchinoprofit/?locale=it_IT'"
            :socialicon="['fab', 'facebook-f']"
          />
          <AppSocialCard
            :small="false"
            :sociallink="'https://www.instagram.com/_la_stanza_dei_balocchi/?fbclid=IwY2xjawJ8efVleHRuA2FlbQIxMAABHs_dNsTL4uJbOMfDT6DlPqXW8UZSoqooxbOzokRkaA_0vnF7m5YrzYSrrD4H_aem_WpvYTpNxxI7aWlOVD-a_HQ# '"
            :socialicon="['fab', 'instagram']"
          />
        </div>
      </div>
      <div class="flex flex-row m-5 shadow-2xl">
        <img
          src="/img/stanzadeibalocchi5x1000.jpg"
          alt="Immagine con informazioni sul 5x1000"
          class="border-white border-8 rounded-xl h-80 w-80"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subtitle", "title"],
};
</script>
