<script setup>
defineProps({ dessert: Object });
const model = defineModel();
</script>

<template>
  <div>
    <q-dialog v-model="model" persistent transition-show="scale" transition-hide="scale">
      <q-card class="my-dialog-card">
        <!-- Header -->
        <q-card-section class="dialog-header row justify-between items-center">
          <span class="text-h6 dialog-title">{{ dessert.name }}</span>
          <q-btn flat round dense icon="close" color="#8B7D6B" @click="model = false" />
        </q-card-section>

        <!-- Bild -->
        <q-card-section class="q-pa-none image-section">
          <img :src="dessert.image" class="card-image" />
        </q-card-section>

        <!-- Beschreibung -->
        <q-card-section class="dialog-content">
          <div class="text-body1 description">
            {{ dessert.description }}
          </div>
          <div class="text-h6 text-right price">{{ dessert.price }} €</div>
        </q-card-section>

        <!-- Zutaten -->
        <q-card-section class="dialog-ingredients">
          <div class="ingredients-title">Zutaten</div>
          <q-list dense class="ingredients-list">
            <q-item
              v-for="(ingredient, index) in dessert.ingredients"
              :key="index"
              class="ingredient-item"
            >
              <q-item-section avatar>
                <q-icon name="check_circle" color="#d4a373" />
              </q-item-section>
              <q-item-section class="ingredient-text">
                {{ ingredient }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <!-- Bestellinfo -->
        <q-card-section class="order-section text-center">
          <div class="order-text">Jetzt telefonisch bestellen unter</div>
          <div class="order-number">+90 555 123 4567</div>
        </q-card-section>

        <!-- Footer -->
        <q-card-actions align="right" class="dialog-footer">
          <q-btn flat label="Schließen" color="#8B7D6B" class="close-btn" @click="model = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style>
/* ==== Allgemeines Styling ==== */
.my-dialog-card {
  width: 100%;
  max-width: 480px;
  border-radius: 18px;
  overflow: hidden;
  background: #fffdf5;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  animation: fadeIn 0.3s ease;
}

/* ==== Header ==== */
.dialog-header {
  background: linear-gradient(to right, #fff8dc, #fceac1);
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dialog-title {
  color: #8b7d6b;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* ==== Bild ==== */
.image-section {
  overflow: hidden;
}
.card-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.my-dialog-card:hover .card-image {
  transform: scale(1.03);
}

/* ==== Beschreibung ==== */
.dialog-content {
  background-color: #fffaf0;
  padding: 1.2rem 1.5rem;
}
.description {
  color: #6b5e4f;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}
.price {
  font-weight: 700;
  color: #8b7d6b;
  font-size: 1.4rem;
}

/* ==== Zutaten ==== */
.dialog-ingredients {
  background-color: #fff8dc;
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.ingredients-title {
  font-weight: 600;
  color: #8b7d6b;
  margin-bottom: 0.6rem;
}
.ingredients-list {
  background-color: white;
  border-radius: 10px;
  padding: 0.4rem 0.2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.ingredient-item {
  padding: 0.3rem 0.6rem;
}
.ingredient-text {
  color: #6b5e4f;
  font-size: 0.95rem;
}

/* ==== Bestellinfo ==== */
.order-section {
  background-color: #fff1c9;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.order-text {
  color: #6b5e4f;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 4px;
}
.order-number {
  font-weight: 700;
  font-size: 1.2rem;
  color: #8b7d6b;
}

/* ==== Footer ==== */
.dialog-footer {
  background-color: #fffdf5;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.close-btn {
  font-weight: 600;
  transition: 0.3s ease;
}
.close-btn:hover {
  background-color: rgba(139, 125, 107, 0.1);
}

/* ==== Animation ==== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.97);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
