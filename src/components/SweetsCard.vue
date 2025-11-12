<script setup>
import { ref } from 'vue';
import SweetsDialog from './SweetsDialog.vue';

const props = defineProps({ dessert: Object });

const dialog = ref(false);
const openDialog = () => {
  dialog.value = true;
};
</script>

<template>
  <div class="card-wrapper q-pa-sm">
    <q-card class="my-card">
      <q-img
        :src="props.dessert.image"
        :alt="props.dessert.name"
        class="card-img"
        :ratio="4 / 3"
        spinner-color="amber"
        :img-style="{ objectFit: 'cover' }"
      />

      <q-card-section class="q-pt-sm q-px-md">
        <div class="card-top row items-start">
          <div class="card-title">{{ props.dessert.name }}</div>
          <div class="price" v-if="props.dessert.price">{{ props.dessert.price }} €</div>
        </div>

        <div class="card-description q-mt-xs">
          {{ props.dessert.description }}
        </div>
      </q-card-section>

      <q-card-actions align="right" class="q-pa-sm q-pt-none">
        <q-btn
          class="read-more-btn"
          unelevated
          dense
          @click="openDialog"
          aria-label="Mehr Informationen"
          label="Mehr Info"
        />
      </q-card-actions>
    </q-card>

    <SweetsDialog v-model="dialog" :dessert="props.dessert" />
  </div>
</template>

<style scoped>
/* Wrapper responsive */
.card-wrapper {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
}

/* Card visual */
.my-card {
  border-radius: 14px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.my-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
}

/* Image */
.card-img {
  width: 100%;
  height: 220px;
}

/* Top row: title + price */
.card-top {
  justify-content: space-between;
  align-items: flex-start;
}
.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.08rem;
  color: #8b7d6b;
  font-weight: 700;
  line-height: 1.1;
  max-width: 75%;
}
.price {
  color: #8b7d6b;
  font-weight: 700;
  font-size: 0.98rem;
  padding-left: 8px;
}

/* Description */
.card-description {
  color: #6b5e4f;
  font-family: 'Inter', 'Roboto', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 3.2rem;
}

/* Actions / Button */
.q-card-actions {
  align-items: center;
}
.read-more-btn {
  background-color: #d4a373;
  color: #fff;
  border-radius: 10px;
  padding: 6px 14px;
  font-weight: 600;
  text-transform: none;
}
.read-more-btn:hover {
  background-color: #b58963;
}

/* Mobile adjustments */
@media (max-width: 599px) {
  .card-wrapper {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .card-img {
    height: 160px;
  }
  .card-title {
    font-size: 1rem;
    max-width: 70%;
  }
  .card-description {
    -webkit-line-clamp: 2;
    min-height: 2.6rem;
    font-size: 0.94rem;
  }
  .price {
    font-size: 0.95rem;
  }
  .read-more-btn {
    padding: 6px 10px;
    font-size: 0.92rem;
  }
}
</style>
