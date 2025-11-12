<script setup></script>

<template>
  <div class="geschichte-page q-pa-lg">
    <!-- Hero-Bereich -->
    <div
      class="hero-section column items-center q-pa-lg"
      style="
        background-color: #fdf1e0;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        text-align: center;
        margin-bottom: 3rem;
      "
    >
      <h1
        class="text-h2"
        style="
          color: #8b7d6b;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          margin-bottom: 1rem;
        "
      >
        Bizim Hikayemiz
      </h1>
      <p
        class="text-subtitle1"
        style="color: #6b5e4f; max-width: 700px; line-height: 1.6; margin: 0 auto"
      >
        Kahraman'ın Tatlı Dünyası, küçük bir fırından başlayarak bugünlere uzanan eşsiz tatlı
        yolculuğunu sizlerle paylaşıyor. Gelenek ve lezzeti bir araya getiren hikayemizi keşfedin.
      </p>
      <q-img
        src="/geschichte-hero.png"
        style="
          border-radius: 12px;
          max-width: 80%;
          height: auto;
          margin-top: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        "
        alt="Hikayemiz"
      />
    </div>

    <!-- Timeline / Story-Segmente -->
    <div class="timeline q-gutter-lg">
      <!-- Segment 1 -->
      <div
        class="story-segment row q-pa-md"
        style="
          align-items: center;
          background-color: #fff8dc;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        "
      >
        <div class="col-12 col-md-6 flex flex-center">
          <q-img
            src="/geschichte-1.png"
            style="border-radius: 12px; max-width: 100%; height: auto"
            alt="Başlangıçlar"
          />
        </div>
        <div class="col-12 col-md-6">
          <h2
            class="text-h4"
            style="color: #8b7d6b; font-family: 'Playfair Display', serif; font-weight: 600"
          >
            Başlangıçlar
          </h2>
          <p class="text-subtitle1" style="color: #6b5e4f; line-height: 1.6">
            Her şey yıllar önce küçük bir fırında başladı. Tutku ve özenle hazırlanan ilk
            tariflerimiz müşterilerimiz tarafından hemen sevildi.
          </p>
        </div>
      </div>

      <!-- Segment 2 -->
      <div
        class="story-segment row q-pa-md"
        style="
          align-items: center;
          background-color: #fff8dc;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          margin-top: 2rem;
        "
      >
        <div class="col-12 col-md-6 order-md-2 flex flex-center">
          <q-img
            src="/geschichte-2.png"
            style="border-radius: 12px; max-width: 100%; height: auto"
            alt="Büyüme"
          />
        </div>
        <div class="col-12 col-md-6 order-md-1">
          <h2
            class="text-h4"
            style="color: #8b7d6b; font-family: 'Playfair Display', serif; font-weight: 600"
          >
            Büyüme ve Gelişim
          </h2>
          <p class="text-subtitle1" style="color: #6b5e4f; line-height: 1.6">
            Artan talep ile birlikte mağazamız da büyüdü. Yeni tarifler ve yaratıcı ürünlerimizle
            müşterilerimizi sürekli şaşırtmaya devam ettik.
          </p>
        </div>
      </div>

      <!-- Segment 3 -->
      <div
        class="story-segment row q-pa-md"
        style="
          align-items: center;
          background-color: #fff8dc;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          margin-top: 2rem;
        "
      >
        <div class="col-12 col-md-6 flex flex-center">
          <q-img
            src="/geschichte-3.png"
            style="border-radius: 12px; max-width: 100%; height: auto"
            alt="Bugün"
          />
        </div>
        <div class="col-12 col-md-6">
          <h2
            class="text-h4"
            style="color: #8b7d6b; font-family: 'Playfair Display', serif; font-weight: 600"
          >
            Bugün
          </h2>
          <p class="text-subtitle1" style="color: #6b5e4f; line-height: 1.6">
            Bugün, el yapımı tatlılarımızla hem geleneksel hem de yenilikçi lezzetleri bir araya
            getiriyoruz. Müşterilerimiz her lokmada hikayemizi tadıyor.
          </p>
        </div>
      </div>
    </div>

    <!-- Call-to-Action am Ende -->
    <div class="q-mt-xl column items-center">
      <q-btn
        to="/"
        color="gold"
        icon="home"
        label="Ana Sayfaya Dön"
        class="q-mt-md home-btn"
        rounded
        unelevated
      />
    </div>
  </div>
</template>

<style>
.geschichte-page {
  font-family: 'Inter', 'Roboto', sans-serif;
}

.story-segment:hover {
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
</style>
