<template>
  <div class="max-w-7xl mx-auto">
    <div :style="{ backgroundImage: `url(${imageBg})` }" class="bg-cover">
      <div class="backdrop-blur-sm">
        <div class="bg-white p-5 w-7/12 mx-auto text-center">
          <p>Aiuto</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imageBg"],
};
</script>
