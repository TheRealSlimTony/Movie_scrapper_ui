<template>
    <div id="app">
      <!-- Área donde los componentes de ruta específicos se renderizan -->
      <MovieDropdown></MovieDropdown>
    </div>
  </template>
  
  
  <script>
  import MovieDropdown from '../components/MovieDropdown.vue';
  
  export default {
    name: 'App',
    components: {
      MovieDropdown,
  }
  }
  </script>
  
  <style>
  #app {
    font-family: 'Fira Code', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333; /* Un color más oscuro para el texto mejora la legibilidad */
    background: #f8f8f8; /* Un fondo claro da una apariencia limpia y moderna */
    margin: 0; /* Quitar márgenes puede dar una apariencia más consistente */
    padding: 2rem; /* Un poco de relleno para que el contenido no toque los bordes */
    text-align: left; /* Alineación a la izquierda para el contenido del texto, más estándar para lectura */
    
    /* Aplicar un gradiente como fondo */
    background-image: linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%);
    
    /* Sombra sutil para la barra superior */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    /* Fuente y tamaño para títulos y textos importantes */
    font-size: 16px;
    line-height: 1.6;
  }
  
  /* Estilos para encabezados, si los tienes */
  h1, h2, h3, h4, h5, h6 {
    color: #2c3e50; /* Un color más fuerte para los encabezados */
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  /* Estilos para botones o enlaces importantes */
  .btn-primary {
    background-color: #2c3e50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #3a5060;
  }
  
  /* Estilos para inputs y formularios */
  input, textarea, select {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Contenedor general para alinear y centrar el contenido */
  .container {
    max-width: 1200px; /* Ancho máximo para el contenido central */
    margin: 0 auto; /* Centrar el contenedor */
    padding: 0 20px; /* Relleno lateral para mantener el contenido alejado de los bordes */
  }
  
  /* Ajustes para dispositivos móviles */
  @media (max-width: 768px) {
    .container {
      padding: 0 10px;
    }
  
    h1 {
      font-size: 1.5rem; /* Tamaño de fuente más pequeño para encabezados en móviles */
    }
  }
  </style>
  