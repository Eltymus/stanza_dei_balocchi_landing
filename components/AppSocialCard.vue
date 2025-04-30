<template>
  <a :href="sociallink" target="_blank" class="mx-2 group">
    <div class="shadow-2xl rounded-full bg-white p-5 m-4">
      <font-awesome-icon
        :icon="socialicon"
        class="text-gray-600 group-hover:text-blue-700 duration-200 text-4xl"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: ["sociallink", "socialicon"],
};
</script>
