<template>
  <div>
    <select v-model="selectedOption">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <button @click="submit">Enviar</button>
    <div v-if="response">
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
      response: null, // Agrega esta línea para almacenar la respuesta del servidor
    };
  },
  methods: {
    async submit() {
      try {
        const payload = { location: this.selectedOption };
        const res = await axios.post('http://127.0.0.1:8000/cartelera/', payload);
        this.response = res.data; // Almacena la respuesta en la propiedad de datos
        console.log(this.response);
      } catch (error) {
        console.error(error);
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
</style>