<template>
  <AlertDialogRoot>
    <AlertDialogTrigger
      class="bg-white text-black font-semibold hover:text-blue-700 duration-200 shadow-sm inline-flex h-[35px] items-center justify-center rounded-full p-6 leading-none outline-none"
    >
      Privacy Policy
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay
        class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
      />
      <AlertDialogContent
        class="z-30 data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 rounded-[6px] bg-white shadow-xl focus:outline-none"
      >
        <AlertDialogTitle class="m-0 font-semibold">
          Privacy Policy
        </AlertDialogTitle>
        <AlertDialogDescription class="mt-4 mb-5 leading-normal">
          <p>
            Ultimo aggiornamento: 20 maggio 2025 Il presente sito web
            (https://www.lastanzadeibalocchi.it) è un sito statico creato a
            scopo informativo e non raccoglie dati personali degli utenti.
          </p>
          <h2>1. Nessuna raccolta di dati personali</h2>
          <p>
            Navigando su questo sito, non vengono raccolti dati personali. Non è
            presente alcun modulo di contatto, registrazione, newsletter o
            commenti. Non viene richiesto né memorizzato alcun dato
            identificativo dell’utente.
          </p>
          <h2>
            2. Cookie Questo sito non utilizza cookie, né propri né di terze
            parti. Non
          </h2>
          <p>
            vengono impiegati strumenti di tracciamento o profilazione. 3.
            Servizi di terze parti Il sito non integra servizi esterni come
            Google Analytics, font esterni traccianti o widget sociali che
            raccolgono dati. 4. Hosting Il sito è ospitato su GitHub Pages, un
            servizio fornito da GitHub Inc. GitHub può raccogliere alcuni dati
            tecnici in forma anonima (come indirizzo IP, data/ora di accesso,
            user-agent del browser) per motivi di sicurezza o statistica. Per
            maggiori informazioni, consulta la Privacy Policy di GitHub.
          </p>
          <h2>5. Diritti dell’utente</h2>
          <p>
            Poiché questo sito non raccoglie dati personali, non conserva alcuna
            informazione che possa essere oggetto di richiesta, modifica o
            cancellazione da parte dell’utente. Per qualsiasi domanda, puoi
            contattare il responsabile del sito scrivendo a:
            lorenzo.tripodi98@gmail.com
          </p>
        </AlertDialogDescription>
        <div class="flex justify-end gap-[25px]">
          <AlertDialogCancel
            class="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]"
          >
            Ho preso visione della Privacy Policy
          </AlertDialogCancel>
        </div>
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
