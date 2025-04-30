<template>
  <button ref="copy" class="p-3 group">
    <div class="bg-white rounded-2xl shadow-2xl">
      <div class="w-full p-4 flex flex-row place-items-center">
        <font-awesome-icon :icon="socialicon" class="text-gray-600 m-4" />
        <div class="flex flex-col">
          <h2 class="font-semibold group-hover:invisible absolute">
            {{ description }}
          </h2>
          <p ref="foo" class="mx-4 invisible group-hover:visible">
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
