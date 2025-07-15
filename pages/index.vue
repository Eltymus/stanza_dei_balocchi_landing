<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
useSeoMeta({
  title:
    "La Stanza dei Balocchi – Supporto alle famiglie con persone autistiche",
  description:
    "La Stanza dei Balocchi è un'associazione dedicata al supporto delle famiglie...",
  ogTitle: "La Stanza dei Balocchi – Inclusione e supporto",
  ogDescription:
    "Supportiamo le famiglie con persone autistiche attraverso iniziative sociali...",
  ogImage: "https://www.stanzadeibalocchi.it/img/stanzadeibalocchi5x1000.jpg",
  ogUrl: "https://www.stanzadeibalocchi.it",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "La Stanza dei Balocchi",
  twitterDescription: "Un'associazione per famiglie con membri autistici...",
  twitterImage:
    "https://www.stanzadeibalocchi.it/img/stanzadeibalocchi5x1000.jpg",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.stanzadeibalocchi.it",
    },
  ],
});
</script>
