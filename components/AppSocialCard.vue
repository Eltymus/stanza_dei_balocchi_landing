<template>
  <a :href="sociallink" target="_blank" class="p-3 group w-full my-2">
    <div
      :class="
        small == false
          ? 'bg-white rounded-full shadow-2xl w-[100px] h-[100px] flex items-center justify-center transition'
          : 'bg-white rounded-full shadow-2xl w-[50px] h-[50px] flex items-center justify-center transition'
      "
    >
      <font-awesome-icon
        :icon="socialicon"
        :class="
          small == false
            ? 'text-gray-600 group-hover:text-blue-700 duration-200 text-4xl'
            : 'text-gray-600 group-hover:text-blue-700 duration-200 text-xl'
        "
      />
    </div>
  </a>
</template>

<script>
export default {
  props: ["sociallink", "socialicon", "small"],
};
</script>
