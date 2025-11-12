<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  dessert: { type: Object, default: () => ({}) },
});
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
});

const PHONE = '+905551234567'; // zentrale Bestellnummer
</script>

<template>
  <q-dialog v-model="model" persistent transition-show="scale" transition-hide="scale">
    <q-card class="my-dialog-card">
      <!-- Header -->
      <q-card-section class="dialog-header row items-center justify-between">
        <div>
          <div class="dialog-subtitle">Spezialität</div>
          <div class="dialog-title">{{ dessert.name }}</div>
        </div>
        <q-btn
          flat
          round
          dense
          icon="close"
          color="dark"
          @click="model = false"
          aria-label="Schließen"
        />
      </q-card-section>

      <!-- Bild -->
      <q-card-section class="q-pa-none image-wrap">
        <q-img
          :src="dessert.image"
          :alt="dessert.name"
          class="dialog-img"
          spinner-color="amber"
          :ratio="16 / 9"
          :img-style="{ objectFit: 'cover' }"
        />
      </q-card-section>

      <!-- Inhalt -->
      <q-card-section class="dialog-content">
        <div class="description">{{ dessert.description }}</div>

        <div class="row items-center q-mt-sm">
          <div class="price">{{ dessert.price ? dessert.price + ' €' : '' }}</div>
          <q-space />
          <!-- Telefon-Bestellung -->
          <q-btn
            unelevated
            class="order-btn"
            color="gold"
            :href="`tel:${PHONE}`"
            aria-label="Per Telefon bestellen"
            target="_self"
          >
            <q-icon name="phone" class="q-mr-xs" /> Per Telefon bestellen
          </q-btn>
        </div>

        <div class="order-note q-mt-sm">
          Rufen Sie uns an: <a :href="`tel:${PHONE}`" class="phone-link">{{ PHONE }}</a>
        </div>
      </q-card-section>

      <!-- Zutaten -->
      <q-card-section class="dialog-ingredients">
        <div class="ingredients-title">Zutaten</div>
        <div class="chips-row q-gutter-sm">
          <q-chip
            v-for="(ing, idx) in dessert.ingredients || []"
            :key="idx"
            dense
            outline
            class="ingredient-chip"
            text-color="dark"
          >
            <q-icon name="check_circle" size="16px" color="gold" class="q-mr-xs" />
            {{ ing }}
          </q-chip>
        </div>
      </q-card-section>

      <!-- Footer -->
      <q-card-actions align="right" class="dialog-footer">
        <q-btn flat label="Schließen" color="dark" class="close-btn" @click="model = false" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
/* Basis / Schriftfamilien passend zur Seite */
.my-dialog-card {
  width: 100%;
  max-width: 640px;
  border-radius: 16px;
  overflow: hidden;
  background: #fffdf5;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  font-family: 'Inter', 'Roboto', sans-serif;
}

/* Header */
.dialog-header {
  background: linear-gradient(90deg, #fff8dc, #fceac1);
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.dialog-subtitle {
  font-size: 0.75rem;
  color: #6b5e4f;
  opacity: 0.9;
}
.dialog-title {
  font-family: 'Inter', 'Roboto', sans-serif; /* nicht-serif */
  color: #8b7d6b;
  font-weight: 700;
  font-size: 1.15rem;
  margin-top: 2px;
}

/* Bild */
.image-wrap {
  background: transparent;
}
.dialog-img {
  width: 100%;
  max-height: 42vh;
  min-height: 160px;
  object-fit: cover;
  display: block;
}

/* Inhalt */
.dialog-content {
  background-color: #fffaf0;
  padding: 1rem 1.25rem;
}
.description {
  color: #3a2d22;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 0.6rem;
}
.price {
  color: #8b7d6b;
  font-weight: 700;
  font-size: 1.05rem;
}

/* Bestell-Button / Hinweis */
.order-btn {
  background-color: #d4a373;
  color: #fff;
  text-transform: none;
  border-radius: 10px;
  padding: 6px 14px;
  font-weight: 600;
}
.order-btn:hover {
  background-color: #b58963;
}
.order-note {
  font-size: 0.9rem;
  color: #6b5e4f;
}
.phone-link {
  color: #8b7d6b;
  font-weight: 700;
  text-decoration: none;
}
.phone-link:hover {
  text-decoration: underline;
}

/* Zutaten */
.dialog-ingredients {
  background-color: #fff8dc;
  padding: 0.8rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}
.ingredients-title {
  color: #8b7d6b;
  font-weight: 600;
  margin-bottom: 0.6rem;
}
.chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.ingredient-chip {
  background: white;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0.04);
  color: #3a2d22;
}

/* Footer */
.dialog-footer {
  background: #fffdf5;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  padding: 0.6rem 1rem;
}
.close-btn {
  color: #3a2d22;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 599px) {
  .my-dialog-card {
    max-width: 92vw;
  }
  .dialog-img {
    max-height: 30vh;
  }
  .dialog-title {
    font-size: 1rem;
  }
  .description {
    font-size: 0.95rem;
  }
}
</style>
