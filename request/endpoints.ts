export const discoverURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY_IMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY_IMDB}&language=en-US`;
export const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY_IMDB}&page=1`;
export const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY_IMDB}&page=1`;
export const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY_IMDB}&page=1`;
export const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY_IMDB}&page=1`;