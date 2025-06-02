<template>
  <AlertDialogRoot>
    <AlertDialogTrigger class="text-white hover:underline text-sm pt-5">
      Privacy Policy
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay
        class="data-[state=open]:animate-overlayShow fixed z-30"
      />
      <AlertDialogContent
        class="overflow-auto z-30 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl items-center justify-center text-center p-5 w-full md:w-3/4 h-full md:h-3/4"
      >
        <AlertDialogTitle class="font-bold text-2xl">
          Privacy Policy
        </AlertDialogTitle>
        <AlertDialogDescription class="mt-4 mb-5 leading-normal gap-5 mx-8">
          <p>
            Ultimo aggiornamento: 20 maggio 2025 Il presente sito web
            (https://www.lastanzadeibalocchi.it) è un sito statico creato a
            scopo informativo e non raccoglie dati personali degli utenti.
          </p>
          <h2 class="font-bold m-2">1. Nessuna raccolta di dati personali</h2>
          <p>
            Navigando su questo sito, non vengono raccolti dati personali. Non è
            presente alcun modulo di contatto, registrazione, newsletter o
            commenti. Non viene richiesto né memorizzato alcun dato
            identificativo dell’utente.
          </p>
          <h2 class="font-bold m-2">2. Cookies</h2>
          <p>
            Questo sito non utilizza cookie, né propri né di terze parti non
            vengono impiegati strumenti di tracciamento o profilazione.
          </p>
          <h2 class="font-bold m-2">3.Servizi di terze parti</h2>
          <p>
            Il sito non integra servizi esterni come Google Analytics, font
            esterni traccianti o widget sociali che raccolgono dati.
          </p>
          <h2 class="font-bold m-2">4. Hosting</h2>
          <p>
            Il sito è ospitato su GitHub Pages, un servizio fornito da GitHub
            Inc. GitHub può raccogliere alcuni dati tecnici in forma anonima
            (come indirizzo IP, data/ora di accesso, user-agent del browser) per
            motivi di sicurezza o statistica. Per maggiori informazioni,
            consulta la Privacy Policy di GitHub.
          </p>
          <h2 class="font-bold m-2">5. Diritti dell’utente</h2>
          <p>
            Poiché questo sito non raccoglie dati personali, non conserva alcuna
            informazione che possa essere oggetto di richiesta, modifica o
            cancellazione da parte dell’utente. Per qualsiasi domanda, puoi
            contattare il responsabile del sito scrivendo a:
            lorenzo.tripodi98@gmail.com
          </p>
        </AlertDialogDescription>
        <AlertDialogCancel
          class="text-white hover:text-blue-700 hover:bg-white bg-blue-700 duration-200 items-center justify-center rounded-full font-semibold leading-none outline-none p-3"
        >
          Ho preso visione della Privacy Policy
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
<script setup lang="ts">
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "radix-vue";
function handleAction() {
  // eslint-disable-next-line no-alert
  alert("clicked action button!");
}
</script>
