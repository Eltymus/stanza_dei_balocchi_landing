<template>
  <button ref="copy" class="p-3 group w-full my-2 max-w-md mx-auto">
    <div class="bg-white rounded-full shadow-2xl transition-all duration-300">
      <div class="w-full p-4 flex flex-row items-center">
        <font-awesome-icon
          :icon="socialicon"
          class="text-gray-600 m-4 group-hover:text-blue-600 text-4xl"
        />
        <div class="flex flex-col w-full relative">
          <h2
            class="font-semibold group-hover:opacity-0 transition-opacity duration-200"
          >
            {{ description }}
          </h2>
          <p
            ref="foo"
            class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 font-semibold"
          >
            {{ contact }}
          </p>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: ["socialicon", "contact", "description"],
  mounted() {
    this.$refs.copy.addEventListener("click", () => {
      navigator.clipboard.writeText(this.contact);
    });
  },
};
</script>
