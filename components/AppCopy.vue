<template>
  <button id="copy">
    <div class="bg-white rounded-full shadow-2xl w-full">
      <font-awesome-icon :icon="socialicon" class="text-gray-600" />
    </div>
  </button>
</template>

<script>
export default {
  props: ["socialicon"],
};
document.getElementById("copy").addEventListener("click", function () {
  alert("Hello World!");
});
</script>
