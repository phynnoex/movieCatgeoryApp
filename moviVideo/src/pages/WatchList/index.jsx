import { useEffect, useState } from "react";
import { getWtachList } from "../../services/WatchList/getWatchList.js";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig.js";
import { useAuth } from "../../Config/AuthContext.jsx";
import MovieCard from "../../components/movieCards/index.jsx";
import CategoriesDisplay from "../../features/CatgoriesDisplay/index.jsx";
import "./styles.scss";

export default function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieResults, setMovieResults] = useState({results: []});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    getWtachList(user.uid)
      .then((ids) => {
        setWatchList(ids);
        const requests = ids.map((id) =>
          fetch(API_ENDPOINTS.movieDetails(id)).then((res) => res.json())
        );

        return Promise.all(requests);
      })
      .then((movieData) => {
        console.log("Movie data:", movieData);
        setMovies(movieData);
    
        setLoading(false);
        console.log(movieResults)
      })
      .catch((err) => {
        console.error("Error fetching watchlist movies:", err);
        setLoading(false);
      });
  }, []);

    useEffect(() => {
      if (movies.length > 0) {
        console.log("Movies:", movies);
      }
    }, [movies]);

  return (
    <>
      { 
        <div className="watch-list">

          {loading && <p>Loading movies...</p>}

          {!loading && movies.length === 0 && (
            <p>No movies in your watch list.</p>
          )}

          <div className="movie-grid">
            <CategoriesDisplay isDisableCard={false} CategoryTitle="my movies" data={{results:movies}} />
          </div>
        </div>
      }
    </>
  );
}
