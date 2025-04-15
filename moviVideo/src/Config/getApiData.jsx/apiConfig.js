const API_ENDPOINTS = {
    popularMovies: "https://api.themoviedb.org/3/movie/popular?api_key=5caadb1fd8920f5739a0363d7a09ff67",
    topRatedMovies: "https://api.themoviedb.org/3/movie/top_rated?api_key=5caadb1fd8920f5739a0363d7a09ff67",
    upcomingMovies: "https://api.themoviedb.org/3/movie/upcoming?api_key=5caadb1fd8920f5739a0363d7a09ff67",
    trendingMovies: "https://api.themoviedb.org/3/trending/movie/week?api_key=5caadb1fd8920f5739a0363d7a09ff67",
    genres: "https://api.themoviedb.org/3/genre/movie/list?api_key=5caadb1fd8920f5739a0363d7a09ff67",
    //movie details
    movieDetails: (movieId) => {
        return `https://api.themoviedb.org/3/movie/${movieId}?api_key=5caadb1fd8920f5739a0363d7a09ff67`
    },
    //movie credits
    movieCredits: (movieId) => {
        return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5caadb1fd8920f5739a0363d7a09ff67`
    },
    //discover by genre
    discoverByGenre: (genreId) => {
        return `https://api.themoviedb.org/3/discover/movie?api_key=5caadb1fd8920f5739a0363d7a09ff67&with_genres=${genreId}`
    },
}

export default API_ENDPOINTS;