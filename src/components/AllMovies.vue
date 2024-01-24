<template>

<h1>Pelicuals del Momento </h1>
<!-- Indicador de carga -->
<div v-if="isLoading" class = "spinner-container">
<div class="spinner"></div>
<!-- Aquí puedes poner un spinner o alguna otra indicación visual -->
</div>
<div v-else-if="response">
    <p>Cartelera:</p>
    <!-- Swiper component -->
    <swiper :slides-per-view="4" space-between="30" loop>
      <swiper-slide v-for="(pelicula, index) in response" :key="index">
        <h3>{{ pelicula.título }}</h3>
        <img :src="pelicula.url_img" alt="Imagen de la película">
      </swiper-slide>
    </swiper>
  </div>

  </template>
  
  
  <script>
  import axios from 'axios';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  export default {
    components :{
        Swiper,
        SwiperSlide
    },
    data() {
      return {
        selectedOption: null, // Asegúrate de definir esto según tus necesidades
        response: null,
        isLoading: false,
      };
    },
    mounted() {
      this.submit(); // Llama al método submit cuando el componente se monta
    },
    methods: {
      async submit() {
        try {
          this.isLoading = true;
          const payload = { location: this.selectedOption };
          const res = await axios.post('http://127.0.0.1:8000/all_movies/', payload);
          this.response = res.data; // Almacena la respuesta en la propiedad de datos
          this.isLoading = false;
        } catch (error) {
          console.error(error);
          this.isLoading = false;
        }
      },
    },
  };
  </script>

<style scoped>
.movie-list {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.movie-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.movie-title {
  font-size: 1.2em;
  color: #333;
}

.movie-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: 0 ;

}

.movie-info {
  margin: 5px 0;
}
.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
.spinner-container {
  display: flex;
  justify-content: center;  /* Centrado horizontal */
  align-items: center;      /* Centrado vertical */
  position: fixed;          /* Posición fija */
  top: 0;
  left: 0;
  width: 100%;              /* Ocupar toda la anchura */
  height: 100%;             /* Ocupar toda la altura */
  z-index: 1000;            /* Asegurarse de que esté por encima de otros elementos */
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente (opcional) */
}
.movie-list {
  padding: 0;
}
.movie-item {
  list-style: none;
}

/* Animación de Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

/* Animación para otros navegadores */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>