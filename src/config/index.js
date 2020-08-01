const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/categorias'
  : 'https://vituflix.herokuapp.com/categorias';

export default {
  URL_BACKEND_TOP,
};
