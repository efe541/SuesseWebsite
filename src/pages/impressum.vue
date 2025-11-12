<template>
  <q-page class="q-pa-xl bg-cream flex flex-center">
    <q-card class="q-pa-lg impressum-card">
      <div class="q-gutter-md">
        <h4 class="text-gold text-weight-bold">Impressum</h4>

        <p>
          <strong>Betreiber der Website:</strong><br />
          Kahraman'ın Tatlı Dünyası<br />
          Şht. Mehmet Öztürk Sk. No:19<br />
          Sakarya, Turkey
        </p>

        <p>
          <strong>Kontakt:</strong><br />
          Telefon: +90 555 123 4567<br />
          E-Mail: info@kahraman-tatli.com
        </p>

        <p>
          <strong>Inhaber:</strong><br />
          Efe Sert
        </p>

        <p>
          <strong>Umsatzsteuer-ID:</strong><br />
          TR123456789
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
          Efe Sert, unter der oben genannten Adresse.
        </p>

        <p>
          <strong>Haftungshinweis:</strong><br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
          externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
          verantwortlich.
        </p>

        <p>
          <strong>Urheberrecht:</strong><br />
          Alle Inhalte dieser Website, insbesondere Texte, Bilder, Grafiken und Layout, unterliegen
          dem Urheberrecht von Kahraman'ın Tatlı Dünyası. Die Verwendung oder Vervielfältigung ist
          nur mit ausdrücklicher Genehmigung erlaubt.
        </p>
      </div>
      <div class="row justify-end">
        <q-btn
          to="/"
          color="gold"
          icon="home"
          label="Zur Startseite"
          class="q-mt-md home-btn"
          rounded
          unelevated
        />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
// keine Logik nötig
</script>

<style scoped>
.home-btn {
  background-color: #d4a373 !important;
  color: white;
  transition: 0.3s ease;
}
.bg-cream {
  background-color: #fffaf3;
}

.impressum-card {
  max-width: 800px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.text-gold {
  color: #d4a373;
}

p {
  color: #2e2e2e;
  line-height: 1.6;
}
</style>
