// plugins/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Importa solo le icone che ti servono!
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default defineNuxtPlugin((nuxtApp) => {
  // Aggiungi le icone alla libreria
  library.add(faFacebookF, faInstagram, faWhatsapp, faCircleInfo);

  // Registra FontAwesomeIcon come componente globale
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
