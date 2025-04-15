import { useEffect, useState } from "react";
import RatingStars from "../RatingStars";
import SlidingWindowCarousel from "../slidingWindowCarousel";

import "./styles.scss";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig";
import useApiData from "../../Config/getApiData.jsx";

export default function ExpandedDetails({ setShowmodal, showModal, movieId }) {
  const [casts, setCasts] = useState([
    "Actor 1",
    "Actor 2",
    "Actor 3",
    "Actor 4",
    "Actor 5",
    "Actor 6",
    "Actor 7",
    "Actor 8",
  ]);

  const { data, loading, error } = useApiData(
    API_ENDPOINTS.movieDetails(movieId)
  );
  const {
    data: castData,
    loading: castLoading,
    error: castError,
  } = useApiData(API_ENDPOINTS.movieCredits(movieId));

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
            <div className="expandedDetailsImg" style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
            }}></div>
            <div className="expandedDetailsDescription">
              <h1 className="movieTitle">{data.title}</h1>
              <p className="movieGenre">{data.genres[0].name}</p>
              <div className="rating">
                <RatingStars rating={data.vote_average} />
              </div>
              <hr />
              <div className="movieDescription">
                <p>
                  {data.overview}
                </p>
              </div>
              <hr />
              <div className="movieDetails">
                <p>
                  <strong>Release Date:</strong> {data.release_date}
                </p>
                <p>
                  <strong>Director:</strong> {castData.crew.find((crew) => crew.job === "Director")?.name}
                </p>
                <p>
                  <strong>Producer</strong> {castData.crew.find((crew) => crew.job === "Producer")?.name }
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
