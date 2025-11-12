<template>
  <q-page class="q-pa-xl bg-cream flex flex-center">
    <q-card class="q-pa-lg zertifikat-card">
      <div class="column items-center q-gutter-md">
        <!-- Überschrift -->
        <h4 class="text-gold text-weight-bold text-center">Unsere Zertifikate</h4>

        <!-- Zertifikat Bild -->
        <q-img
          src="/zertifikat.jpg"
          style="width: 100%; max-width: 600px; border-radius: 12px"
          fit="contain"
        >
          <template v-slot:error>
            <div class="absolute-full flex flex-center text-subtitle1">
              Bild konnte nicht geladen werden
            </div>
          </template>
        </q-img>

        <!-- Beschreibung -->
        <p class="text-center q-mt-md">
          Wir sind stolz darauf, höchste Qualitätsstandards zu erfüllen und dies durch offizielle Zertifizierungen zu bestätigen.
        </p>
      </div>

      <!-- Home Button -->
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

<style scoped>
.home-btn {
  background-color: #d4a373 !important;
  color: white;
  transition: 0.3s ease;
}

.bg-cream {
  background-color: #fffaf3;
}

.zertifikat-card {
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.text-gold {
  color: #d4a373;
}
</style>