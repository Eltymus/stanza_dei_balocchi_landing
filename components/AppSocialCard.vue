<template>
  <a :href="sociallink" target="_blank" class="">
    <div class="flex flex-col justify-between p-4">
      <div
        class="flex flex-row justify-center items-center gap-2 border-gray-300 border-2 rounded-lg bg-white"
      >
        <font-awesome-icon :icon="socialicon" />
        <h5 class="">{{ socialname }}</h5>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["socialname", "sociallink", "socialicon"],
  mounted() {
    console.log("Received socialicon:", this.socialicon); // Verifica che la prop sia passata
  },
};
</script>
