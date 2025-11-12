<template>
  <q-page class="q-pa-xl bg-cream justify-center flex">
    <q-card class="q-pa-lg contact-card" style="margin: auto">
      <div class="column items-center q-gutter-md">
        <!-- Rundes Bild -->
        <q-avatar size="150px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="Kahraman Tatlı Dünyası" />
        </q-avatar>

        <!-- Name -->
        <div class="text-h5 text-gold text-weight-bold">Kahraman'ın Tatlı Dünyası</div>

        <!-- Adresse -->
        <div class="text-subtitle1 text-dark text-center">
          Şht. Mehmet Öztürk Sk. No:19<br />
          Sakarya, Turkey
        </div>

        <!-- Telefon -->
        <div class="text-subtitle2 text-dark">📞 +90 555 123 4567</div>

        <!-- Optional: kleine Beschreibung -->
        <div class="text-body2 text-center text-dark q-mt-sm">
          Besuchen Sie uns und genießen Sie traditionelle türkische Desserts – täglich frisch
          zubereitet.
        </div>
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

.home-btn:hover {
  background-color: #c99756 !important;
}
.bg-cream {
  background-color: #fffaf3;
}

.contact-card {
  width: 400px;
  max-width: 90vw;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.text-gold {
  color: #d4a373;
}

.text-dark {
  color: #2e2e2e;
}
</style>
