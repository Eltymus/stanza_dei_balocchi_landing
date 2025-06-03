<template>
  <div class="max-w-7xl mx-auto">
    <div :style="{ backgroundImage: `url(${imageBg})` }" class="bg-cover">
      <div class="backdrop-blur-sm">
        <div class="bg-white w-9/12 mx-auto">
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

      if (inList) html += "</ul>"; // Chiudi lista se file finisce con una lista

      document.getElementById("text").innerHTML = html;
    },
  },
};
</script>
