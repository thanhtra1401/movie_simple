export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "0840440e64bb8ae71f82ccacd7cbd5c4";
export const apiUrl = {
  getImageOrigin: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  getImage500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
  getMovieList: (type, page = 1) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
  getMovieRelated: (movieId, type) =>
    `https://api.themoviedb.org/3/movie/${movieId}/${type}?api_key=${apiKey}`,
  getMovieSearch: (query, page = 1) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
};
