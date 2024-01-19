// router.js
import { createRouter, createWebHashHistory } from 'vue-router';
// import AllMovies from './components/AllMovies.vue';
import MovieLocationPage from './views/MoviesLocationPage.vue';
import AllMoviesPage from './views/AllMoviesPage.vue';

const routes = [
  { path: '/movies_location/', component:  MovieLocationPage},
  {path:'/all/',component: AllMoviesPage},
  // Agrega más rutas aquí
];




const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
