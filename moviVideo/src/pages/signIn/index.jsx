import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";
import useApiData from "../../Config/getApiData.jsx";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig.js";
import "./styles.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    data: trendingData,
    loading: trendingLoading,
    error: trendingError,
  } = useApiData(API_ENDPOINTS.trendingMovies);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed in:", userCredential.user);
      navigate("/"); // redirect after sign-in
    } catch (err) {
      console.error("Sign-in error:", err.message);
      setError(err.message);
    }
  };

  const handleSignUp = () => {
    navigate("/signUp");
  }

  return (
    <div className="signIn">
      <div
        className="signInImage"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            trendingData ? trendingData.results[0].backdrop_path : ""
          })`,
        }}
      ></div>
      <div className="signInForm">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          {error && <p className="error">{error}</p>}
        </form>
        <div><p>don't have an account <span onClick={handleSignUp} style={{color: "#ffcc00", cursor: "pointer"}}>signUp</span></p></div>
      </div>
    </div>
  );
}
