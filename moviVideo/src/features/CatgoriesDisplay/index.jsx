import "./styles.scss";
import MovieCard from "../../components/movieCards";
import { use, useEffect } from "react";

export default function CategoriesDisplay(props) {

  
  useEffect(() => {
    console.log(props.data, props.CategoryTitle);
  }, [props.data]);
  
  return (
    <div className="TrendingMovies">
      <h1>{props.CategoryTitle}</h1>
      <div className="listContainer">
        {props.data ? props.data.results.map((item) => (
          <MovieCard
            isDisableCard ={props.isDisableCard}
            key={item.id}
            title={item.title}
            image={item.poster_path}
            rating={item.vote_average}
            id={item.id}
            date={item.release_date}
          />
        )): "null"}
      </div>
    </div>
  );
}
