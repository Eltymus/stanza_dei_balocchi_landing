<template>
  <div class="max-w-7xl mx-auto">
    <div :style="{ backgroundImage: `url(${imageBg})` }" class="bg-cover">
      <div class="backdrop-blur-sm">
        <div class="bg-white md:w-8/12 w-full mx-auto text-center">
          <div class="p-7">
            <h3 class="text-2xl font-bold">Chi siamo</h3>
            <br />
            <cite class="text-sm text-gray-500"
              >Discorso della fondatrice in occasione della Giornata azzurra
              sull’autismo gestita dal tavolo di lavoro sulla disabilità del
              comune di giaveno</cite
            >
          </div>
          <div
            class="bg-white p-5 w-8/12 mx-auto text-center h-96 overflow-y-scroll"
          >
            <p id="text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imageBg"],
  mounted() {
    this.loadText();
  },
  methods: {
    async loadText() {
      const rawText = await (await fetch("discorso.txt")).text();
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
