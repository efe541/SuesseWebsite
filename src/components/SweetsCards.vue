<script setup>
import { useMyStore } from '@/stores/myStore.js';

const myStore = useMyStore();
const { desserts } = toRefs(myStore.state);

onMounted(async () => {
  await myStore.getAll();
});
</script>

<template>
  <div class="flex justify-center ">
    <SweetsCard v-for="dessert in desserts" :key="dessert.id" :dessert="dessert" />
  </div>
</template>

<style>
</style>
