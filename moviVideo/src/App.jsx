import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import CategoriesDisplay from "./features/CatgoriesDisplay";
import GenreList from "./components/genreList";
import useApiData from "./Config/getApiData.jsx";
import Categories from "./pages/Categories/index.jsX";
import API_ENDPOINTS from "./Config/getApiData.jsx/apiConfig.js";
import { useEffect, useState } from "react";
import SignUp from "./pages/Sign-up/index.jsx";
import WatchList from "./pages/WatchList/index.jsx";
import SignIn from "./pages/signIn/index.jsx";
export  function WrapGenre({ genreId, genreName }) {
  const { data, loading, error } = useApiData(API_ENDPOINTS.discoverByGenre(genreId));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <CategoriesDisplay
      CategoryTitle={genreName}
      data={data}
    />
  );
}

function App() {
  const [genreId, setGenreId] = useState(null);
  const { data, loading, error } = useApiData(API_ENDPOINTS.genres);




  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route index element={<GenreList />} />
          {!loading &&
            data.genres.map((genre, index) => (
              <Route
                key={index}
                path={`${genre.id}`}
                element={ <WrapGenre genreId={genre.id} genreName={genre.name} />}
              />
            ))}
        </Route>
        <Route path="signUp"  element={<SignUp />} />
        <Route path="signIn"  element={<SignIn/>} />
        <Route path="*" element={<p>Page not found</p>} />
        <Route path="watchList" element={<WatchList/>} />
        
        

      </Route>
    </Routes>
  );
}

export default App;
