<template>
  <div
    :style="{ backgroundImage: `url(${imageBg})` }"
    class="bg-cover max-w-7xl mx-auto"
  >
    <div class="flex flex-row m-4 backdrop-blur-sm">
      <div class="flex flex-col w-1/3 text-center justify-center">
        <h1 class="text-3xl font-extrabold p-5">Unisciti a noi o aiutaci</h1>
        <p>
          Entra a far parte della stanza o contattaci se sei interessato a
          collaborare con noi
        </p>
      </div>
      <div class="flex flex-col w-1/3">
        <AppSocialCard
          :socialname="'Stanzadeibalocchi@gmail.com'"
          :socialicon="['fas', 'circle-info']"
        />
        <AppSocialCard
          :socialname="'Pagina Facebook'"
          :sociallink="'https://www.facebook.com/lastanzadeibalocchinoprofit/?locale=it_IT'"
          :socialicon="['fab', 'facebook-f']"
        />
        <AppSocialCard
          :socialname="'Pagina Instagram'"
          :sociallink="'https://www.instagram.com/_la_stanza_dei_balocchi/?fbclid=IwY2xjawJ8efVleHRuA2FlbQIxMAABHs_dNsTL4uJbOMfDT6DlPqXW8UZSoqooxbOzokRkaA_0vnF7m5YrzYSrrD4H_aem_WpvYTpNxxI7aWlOVD-a_HQ# '"
          :socialicon="['fab', 'instagram']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageBg"],
};
</script>
