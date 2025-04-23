import { Link } from "react-router-dom";
import CategoriesCard from "../../components/CatgeoriesCard";
import "./styles.scss";

import "./styles.scss";
import useApiData from "../../Config/getApiData.jsx";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig.js";
import { useState } from "react";



export default function GenreList() {
  
  const {data, loading, error} = useApiData(API_ENDPOINTS.genres)
  
  
  return (
    <div className="genreList">
      {!loading ? data.genres.map((genre, index) => (
        <Link key={index} to={`/categories/${genre.id}`} >
          <CategoriesCard CategoryName={genre.name} />
        </Link>
      )): <p>Loading...</p>}
    </div>
  );
}



