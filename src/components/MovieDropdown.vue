<template>
  <div>
    <select v-model="selectedOption">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <button @click="submit">Enviar</button>

    <!-- Indicador de carga -->
    <div v-if="isLoading" class = "spinner-container">
      <div class="spinner"></div>
      <!-- Aquí puedes poner un spinner o alguna otra indicación visual -->
    </div>

    <!-- Contenido cargado, mostrado solo si no está cargando -->
    <div v-else-if="response">
      <p>Cartelera:</p>
      <ul class="movie-list">
        <li v-for="(pelicula, index) in response" :key="index" class="movie-item">
          <h3 class="movie-title">{{ pelicula.título }}</h3>
          <img :src="pelicula.url_img" alt="Imagen de la película" class="movie-image">
          <div class="movie-info"><strong>Duración:</strong> {{ pelicula.duración }}</div>
          <div class="movie-info"><strong>Horarios Subtitulados:</strong> {{ pelicula.horarios_sub.join(', ') }}</div>
          <div class="movie-info"><strong>Horarios Doblados:</strong> {{ pelicula.horarios_dob.join(', ') }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedOption: '', // La opción seleccionada
      options: [
        { value: 'moravia-costa-rica', text: 'moravia-costa-rica' },
        { value: 'cartago-costa-rica', text: 'cartago-costa-rica' },
        // ... otras opciones
      ],
      isLoading:false,
      response: null, // Agrega esta línea para almacenar la respuesta del servidor
    };
  },
  methods: {
    async submit() {
      try {
        this.isLoading = true;
        const payload = { location: this.selectedOption };
        const res = await axios.post('http://127.0.0.1:8000/cartelera/', payload);
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