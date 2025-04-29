<template>
  <a :href="sociallink" target="_blank" class="my-2">
    <div class="flex flex-row items-center shadow-2xl rounded-lg bg-white p-5">
      <font-awesome-icon :icon="socialicon" class="text-gray-600 w-1/3" />
      <p class="">{{ socialname }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ["socialname", "sociallink", "socialicon"],
};
</script>
