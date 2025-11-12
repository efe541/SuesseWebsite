<script setup></script>

<template>
  <q-layout view="hHh Lpr lff" class="page-wrapper">
    <q-header class="q-pa-xs text-white" reveal elevated style="background-color: #fff8dc">
      <q-toolbar>
        <q-toolbar-title class="flex justify-center q-gutter-x-lg">
          <img src="/logo.png" class="lt-xs" width="50px" />
          <router-link
            to="/"
            class="text-h3 text-black gt-xs"
            style="font-family: 'Playfair Display', serif; text-decoration: none"
            >Kahraman'ın Tatlı Dünyası</router-link
          >
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');

* {
  font-family: 'Inter', 'Roboto', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Inter', 'Roboto', sans-serif;
  color: #8b7d6b;
}

body {
  background: linear-gradient(to bottom, #2c3e50, #fefefe);
}

.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff8dc;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
