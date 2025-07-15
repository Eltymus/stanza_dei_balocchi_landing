<template>
  <div class="max-w-7xl mx-auto">
    <div :style="{ backgroundImage: `url(${imageBg})` }" class="bg-cover">
      <div class="group backdrop-blur-sm">
        <div class="bg-white md:w-8/12 w-full mx-auto text-center">
          <div class="p-5">
            <h3 class="text-2xl font-bold">{{ title }}</h3>
            <br />
            <cite
              class="text-sm text-gray-500 group-hover:text-blue-700 delay-100"
            >
              {{ subtitle }}</cite
            >
          </div>
          <div
            class="bg-white p-5 w-8/12 mx-auto text-center h-96 overflow-y-scroll no-scrollbar"
          >
            <p id="text" class="text-wrap"></p>
          </div>
          <div>
            <p
              class="text-sm text-gray-500 md:translate-x-32 sm:translate-x-0 w-60 mx-auto p-8 group-hover:text-blue-700 delay-100"
            >
              {{ author }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imageBg", "doc", "author", "subtitle", "title"],
  mounted() {
    this.loadText();
  },
  methods: {
    async loadText() {
      const rawText = await (await fetch(this.doc)).text();
      const lines = rawText.split("\n");

      let html = "";
      let inList = false;

      for (let line of lines) {
        line = line.trim();

        if (line.startsWith("-")) {
          if (!inList) {
            html += "<ul class='list-disc list-inside text-left'>";
            inList = true;
          }
          html += `<li>${line.slice(1).trim()}</li>`;
        } else {
          if (inList) {
            html += "</ul>";
            inList = false;
          }
          if (line === "") {
            html += "<br />";
          } else {
            html += `<p>${line}</p>`;
          }
        }
      }

      if (inList) html += "</ul>";

      document.getElementById("text").innerHTML = html;
    },
  },
};
</script>
