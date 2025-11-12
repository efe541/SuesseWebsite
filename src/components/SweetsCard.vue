<script setup>
defineProps({ dessert: Object });

const dialog = ref(false);
const openDialog = () => {
  dialog.value = true;
};
</script>

<template>
  <div class="card-wrapper q-pa-md">
    <q-card class="my-card card">
      <!-- Dessert Bild -->
      <img :src="`${dessert.image}`" class="card-image" />

      <!-- Dessert Name -->
      <q-card-section>
        <div class="card-title-box">{{ dessert.name }}</div>
      </q-card-section>

      <!-- Dessert Beschreibung -->
      <q-card-section class="q-pt-none">
        <div class="card-description">
          {{ dessert.description }}
        </div>
      </q-card-section>

      <!-- Read More Button -->
      <q-card-actions align="right" class="q-pa-md">
        <q-btn class="read-more-btn" @click="openDialog" label="Mehr Info" rounded unelevated />
      </q-card-actions>
    </q-card>

    <!-- Dialog -->
    <SweetsDialog v-model="dialog" :dessert="dessert" />
  </div>
</template>

<style>
.card-wrapper {
  width: 100%;
  max-width: 350px; /* Bessere Breite für Desktop */
}

/* Karten Layout */
.my-card {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 16px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Bild */
.card-image {
  width: 100%;
  height: 220px; /* Fixe Höhe für konsistentes Layout */
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.card:hover .card-image {
  transform: scale(1.05);
}

/* Titel */
.card-title-box {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #8b7d6b;
  margin-bottom: 0.5rem;
  min-height: 40px; /* Mindesthöhe für konsistentes Layout */
}

/* Beschreibung */
.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #6b5e4f;
  line-height: 1.6;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  min-height: 80px; /* Mindesthöhe für konsistentes Layout */
}

/* Read More Button */
.read-more-btn {
  background-color: #d4a373;
  color: white;
  font-weight: 600;
  transition: 0.3s ease;
  padding: 8px 20px;
}

.read-more-btn:hover {
  background-color: #b58963;
}

/* Responsive Anpassungen */
@media (max-width: 599px) {
  .card-wrapper {
    max-width: 100%;
  }

  .card-image {
    height: 180px;
  }

  .card-title-box {
    font-size: 1.2rem;
  }

  .card-description {
    font-size: 0.9rem;
    -webkit-line-clamp: 2;
  }
}
</style>
