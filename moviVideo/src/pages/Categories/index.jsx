import { Link, Outlet, Route } from "react-router-dom";
import Background from "../../features/background";
import CategoriesDisplay from "../../features/CatgoriesDisplay";
import "./styles.scss";
import GenreList from "../../components/genreList";
import ExpandedDetails from "../../components/ExpandedDetails";
import useApiData from "../../Config/getApiData.jsx";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig.js";
import Footer from "../../features/footer/index.jsx";

export default function Categories() {
  const {
    data: trendingData,
    loading: trendingLoading,
    error: trendingError,
  } = useApiData(API_ENDPOINTS.trendingMovies);

  return (
    <>
      {!trendingLoading ? (
        <>
        <div className="categoriesPage">
          <Background image={trendingData.results[0].backdrop_path}/>
          <h1 style={{
            color: "white",
          }}>Movie Genres</h1>
          <Outlet />
        </div>
        <Footer/>
        </>
      ) : (
        "null"
      )}
    </>
  );
}
