import { useEffect, useState } from "react";
import RatingStars from "../RatingStars";
import SlidingWindowCarousel from "../slidingWindowCarousel";
import { addToWatchlist } from "../../services/WatchList/AddToWatchList.js";

import "./styles.scss";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig";
import useApiData from "../../Config/getApiData.jsx";
import { useAuth } from "../../Config/AuthContext.jsx";
export default function ExpandedDetails({ setShowmodal, showModal, movieId, isDisableCard = true }) {
  

  const { data, loading, error } = useApiData(
    API_ENDPOINTS.movieDetails(movieId)
  );
  const {
    data: castData,
    loading: castLoading,
    error: castError,
  } = useApiData(API_ENDPOINTS.movieCredits(movieId));

  
    const { user } =  useAuth()

    const handleClick = async (movieId) => {
      if (!user) return alert("You need to log in first");
        await addToWatchlist(user.uid, movieId);
        alert("Movie added!");
    }
  

  return (
    <>
      <div className="expandedDetailsContainer">
        <div
          className="cancelButton"
          onClick={() => {
            setShowmodal(false);
          }}
        >
          X
        </div>
        {!loading && !castLoading ? (
          <div className="expandedDetails">
            <div
              className="expandedDetailsImg"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
              }}
            ></div>
            <div className="expandedDetailsDescription">
              <div className="expandedDetailsDescriptionTop">
              <div className="expandedDetailsDescriptionTopLeft">
                <h1 className="movieTitle">{data.title}</h1>
                <p className="movieGenre">{data.genres[0].name}</p>
                <div className="rating">
                  <RatingStars rating={data.vote_average} />
                </div>
                </div>
                <div className="expandedDetailsDescriptionTopRight">
                  {isDisableCard && <div className="watchListButton" onClick={()=>{handleClick(data.id)}}>watchList</div>}
                </div>
              </div>
              <hr />
              <div className="movieDescription">
                <p>{data.overview}</p>
              </div>
              <hr />
              <div className="movieDetails">
                <p>
                  <strong>Release Date:</strong> {data.release_date}
                </p>
                <p>
                  <strong>Director:</strong>{" "}
                  {castData.crew.find((crew) => crew.job === "Director")?.name}
                </p>
                <p>
                  <strong>Producer</strong>{" "}
                  {castData.crew.find((crew) => crew.job === "Producer")?.name}
                </p>
                <p>
                  <strong>Language</strong> {data.original_language}
                </p>
              </div>
              <hr />
              <div className="movieCast">
                <p>
                  <strong>Casts</strong>
                </p>
                <SlidingWindowCarousel items={castData.cast} />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
