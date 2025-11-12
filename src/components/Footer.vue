<template>
  <q-footer class="bg-cream text-dark">
    <div class="footer-container q-pt-lg q-pb-md">
      <div class="row justify-around text-center text-md-left">
        <div class="col-12 col-md-4 column items-center items-md-start q-mb-md">
          <h5 class="text-gold text-weight-bold q-mb-xs">Kahraman'ın Tatlı Dünyası</h5>
          <div class="footer-content">
            <p>Şht. Mehmet Öztürk Sk. No:19<br />Sakarya, Turkey</p>
            <p>📞 +90 555 123 4567</p>
            <p>✉️ info@kahraman-tatli.com</p>
            <p>💳 Kreditkarten akzeptiert</p>
            <p>🥡 Takeaway verfügbar</p>
          </div>
        </div>

        <div class="col-6 col-md-3 column items-center items-md-start q-mb-md">
          <h6 class="text-weight-bold text-gold q-mb-xs">Öffnungszeiten</h6>
          <ul class="footer-list">
            <li>Mo – Fr: 09:00 – 21:00</li>
            <li>Sa – So: 10:00 – 22:00</li>
          </ul>
        </div>

        <div class="col-6 col-md-2 column items-center items-md-start">
          <h6 class="text-weight-bold text-gold q-mb-xs">Information</h6>
          <q-list dense class="no-border footer-list">
            <q-item clickable v-ripple to="/impressum">
              <q-item-section>Impressum</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/zertifikat">
              <q-item-section>Zertifikat</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/kontakt">
              <q-item-section>Kontakt</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <div class="footer-bottom text-center q-py-sm">
      <p class="text-caption text-dark q-mb-none">
        © 2025 Kahraman'ın Tatlı Dünyası — <span class="text-gold">Efe Sert</span>
      </p>
    </div>
  </q-footer>
</template>

<script setup></script>

<style scoped>
.bg-cream {
  background-color: #fffaf3;
}

.text-gold {
  color: #d4a373;
}

.footer-container {
  max-width: 1150px;
  margin: 0 auto;
}

.footer-content p {
  margin: 4px 0;
  color: #3a2d22;
  font-size: 1rem;
  line-height: 1.4;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin: 4px 0;
  color: #3a2d22;
  font-size: 1rem;
}

.q-item {
  color: #3a2d22;
  transition: color 0.3s ease;
  padding: 4px 0;
  font-size: 1rem;
}

.q-item:hover {
  color: #d4a373;
}

.footer-bottom {
  border-top: 1px solid #e0d5c4;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .footer-content,
  .footer-list,
  .q-item-section {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
}
</style>
