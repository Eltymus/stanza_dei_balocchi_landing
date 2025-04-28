<template>
  <div :style="{ backgroundImage: `url(${imageBg})` }" class="bg-cover">
    <div class="max-w-7xl mx-auto flex flex-row m-4 backdrop-blur-sm">
      <div class="flex flex-col w-1/3 text-center justify-center">
        <h1 class="text-3xl font-extrabold p-5">Unisciti a noi o aiutaci</h1>
        <p>
          Entra a far parte della stanza o contattaci se sei interessato a
          collaborare con noi
        </p>
      </div>
      <div class="flex flex-col w-1/3">
        <AppSocialCard
          :socialname="'Pagina Facebook'"
          :sociallink="'https://www.facebook.com/lastanzadeibalocchinoprofit/?locale=it_IT'"
          :socialicon="'fa-brands fa-facebook'"
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
