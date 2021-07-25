const API_KEY = "d7c3c1b7af42d6043e0729870317e71a";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en_US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en_US`,
    fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
};

// https://api.themoviedb.org/3/trending/all/week?api_key=d7c3c1b7af42d6043e0729870317e71a&language=en_US
export default requests;
