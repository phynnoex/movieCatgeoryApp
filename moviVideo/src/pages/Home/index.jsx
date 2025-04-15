import { useEffect, useState } from "react";
import MovieCard from "../../components/movieCards";
import RatingStars from "../../components/RatingStars";
import Background from "../../features/background";
import CategoriesDisplay from "../../features/CatgoriesDisplay";
import Layout from "../../Layout";
import "./styles.scss";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig.js";
import useApiData from "../../Config/getApiData.jsx";
import Footer from "../../features/footer/index.jsx";


export default function Home() {
    
    const { data:trendingData, loading:trendingLoading, error:trendingError } = useApiData(API_ENDPOINTS.trendingMovies);
    const { data:popularData, loading:popularLoading, error:popularError } = useApiData(API_ENDPOINTS.popularMovies);
    const { data:topRatedData, loading:topRatedLoading, error:topRatedError } = useApiData(API_ENDPOINTS.topRatedMovies);
    
    const [index,setIndex] = useState(0);
    // const rating = data.results[0].vote_average/10 * 5;

    useEffect(() => {
        setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 20);
        }, 50000);
    }, []);
    return (
        <>
        { !trendingLoading ? 
        <div className="home">
            <div className="homeContainer"> 
            <Background image={trendingData.results[index].backdrop_path}/>
            <div className="HeroDetail">
                <h1 className="HeroMovieTitle">{trendingData.results[index].title}</h1>
                <p>watch movies online</p>
                <RatingStars rating={trendingData.results[index].vote_average} />
                <div className="genre">Thriller</div>
            </div>
            <CategoriesDisplay CategoryTitle = "trending movies" data={trendingData}/>
            <CategoriesDisplay CategoryTitle = "popular movies" data={popularData}/>
            <CategoriesDisplay CategoryTitle = "top-rated movies" data={topRatedData}/>
            </div>
            <Footer/>
        </div> : <p>Loading...</p>
        }
        </>
        
    )
}