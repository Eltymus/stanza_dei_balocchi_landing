<template>
  <div class="bg-cover bg-blue-400 max-w-7xl mx-auto">
    <div class="flex md:flex-row sm:flex-col items-center p-4 backdrop-blur-sm">
      <div
        class="flex flex-col md:w-1/3 sm:w-full text-center justify-center text-white px-2"
      >
        <h1 class="text-3xl font-extrabold p-5">Unisciti a noi o aiutaci</h1>
        <p>
          Entra a far parte della stanza o contattaci se sei interessato a
          collaborare con noi
        </p>
      </div>
      <div class="flex flex-row md:w-1/3 mx-4 justify-center p-5">
        <AppSocialCard
          :sociallink="'https://www.facebook.com/lastanzadeibalocchinoprofit/?locale=it_IT'"
          :socialicon="['fab', 'facebook-f']"
        />
        <AppSocialCard
          :sociallink="'https://www.instagram.com/_la_stanza_dei_balocchi/?fbclid=IwY2xjawJ8efVleHRuA2FlbQIxMAABHs_dNsTL4uJbOMfDT6DlPqXW8UZSoqooxbOzokRkaA_0vnF7m5YrzYSrrD4H_aem_WpvYTpNxxI7aWlOVD-a_HQ# '"
          :socialicon="['fab', 'instagram']"
        />
      </div>
      <div class="flex flex-row">
        <img
          src="/img/stanzadeibalocchi5x1000.jpg"
          alt="Immagine con informazioni sul 5x1000"
          class="border-white border-8 rounded-xl h-64"
        />
      </div>
    </div>
  </div>
</template>

<script></script>
