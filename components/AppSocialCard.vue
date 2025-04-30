<template>
  <a :href="sociallink" target="_blank" class="mx-2">
    <div class="shadow-2xl rounded-full bg-white p-5 w-fit">
      <font-awesome-icon
        :icon="socialicon"
        class="text-gray-600 hover:text-blue-700 duration-200"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: ["sociallink", "socialicon"],
};
</script>
