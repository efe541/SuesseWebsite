<script setup>
const myStore = useMyStore();
const { message } = toRefs(myStore.state);

const images = [
  { id: 1, src: '/baklava.jpg', alt: 'Baklava' },
  { id: 2, src: '/baklava.jpg', alt: 'Baklava' },
  { id: 3, src: '/baklava.jpg', alt: 'Baklava' },
];
</script>

<template>
  <div
    class="hero-section row items-center q-gutter-lg"
    style="position: relative; min-height: 60vh; padding: 3rem; overflow: hidden"
  >
    <!-- Dekorative Kreise innerhalb des Wrappers -->
    <div
      style="
        position: absolute;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: rgba(212, 163, 115, 0.15);
        top: 10px;
        left: 10px;
        z-index: 0;
      "
    ></div>

    <div
      style="
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: rgba(212, 163, 115, 0.12);
        top: 200px;
        left: 100px;
        z-index: 0;
      "
    ></div>

    <div
      style="
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: rgba(212, 163, 115, 0.08);
        top: 50px;
        right: 50px;
        z-index: 0;
      "
    ></div>

    <div
      style="
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: rgba(212, 163, 115, 0.1);
        bottom: 20px;
        right: 150px;
        z-index: 0;
      "
    ></div>

    <!-- Textbereich links -->
    <div class="col" style="position: relative; z-index: 1">
      <h3 style="color: #8b7d6b; font-weight: 700; font-size: 3rem; margin-bottom: 1rem">
        Hoşgeldiniz
      </h3>
      <p style="color: #6b5e4f; font-size: 1.1rem; line-height: 1.8; max-width: 500px">
        Kahraman'ın Tatlı Dünyası'na hoşgeldiniz! Taze ve hochwertige Süßigkeiten werden mit Liebe
        zubereitet und bieten Ihnen ein einzigartiges Geschmackserlebnis.
      </p>
    </div>

    <!-- Bild rechts -->
    <div class="col flex flex-center" style="position: relative; z-index: 1">
      <q-img
        src="/Home.png"
        style="
          border-radius: 16px;
          max-width: 100%;
          height: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        "
        alt="Tatlılar"
      />
    </div>
  </div>

  <!-- Willkommensbereich -->
  <div
    class="hero-section column items-center q-pa-lg"
    style="
      background-color: #fdf1e0;
      border-radius: 12px;
      margin-bottom: 2rem;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
      text-align: center;
    "
  >
    <!-- Überschrift -->
    <h3 style="color: #8b7d6b; font-weight: 700; margin-bottom: 1rem">
      Güvenilir Lezzet ve Efsanevi Tatlar
    </h3>

    <!-- Beschreibungstext -->
    <p
      class="text-subtitle1"
      style="color: #6b5e4f; line-height: 1.6; max-width: 600px; margin: 0 auto 1.5rem"
    >
      Kahraman'ın Tatlı Dünyası, yılların deneyimiyle hazırlanan, taze ve kaliteli malzemelerle
      üretilmiş eşsiz tatlıları sizlere sunuyor. Gelenek ve lezzeti bir araya getiren hikayemizi
      keşfedin.
    </p>

    <!-- Call-to-Action Button -->
    <q-btn
      to="/geschichte"
      color="home-btn"
      icon="home"
      label="Hikayemizi Keşfedin"
      class="q-mt-md q-mb-lg home-btn"
      rounded
      unelevated
    />

    <!-- Bild -->
    <img
      src="/homebild.jpg"
      style="
        border-radius: 12px;
        max-width: 80%;
        height: auto;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      "
      alt="Tatlılar"
    />
  </div>
  <div class="q-mx-xl column items-start">
    <h3 class="text-bold text-h3 q-mb-lg q-ml-lg">
      Güvenilir Lezzet <q-separator inset color="black" />
    </h3>

    <SweetsCards />
    <h3 class="text-bold text-h3 q-mb-lg q-ml-lg">Arşiv <q-separator inset color="black" /></h3>
  </div>
  <div class="q-pa-md row justify-center">
    <q-card
      v-for="i in images"
      :key="i.id"
      style="background-color: #fdf1e0"
      class="my-img q-pa-md q-ma-lg"
    >
      <img :src="i.src" />
    </q-card>
  </div>
</template>
<style>
.my-img {
  width: 100%;
  max-width: 250px;
}
.home-btn {
  background-color: #d4a373 !important;
  color: white;
  transition: 0.3s ease;
}

</style>
