import { use, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./styles.scss";
import { auth } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Config/AuthContext";
import useApiData from "../../Config/getApiData.jsx";
import API_ENDPOINTS from "../../Config/getApiData.jsx/apiConfig.js";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const { isSignedUP } = useAuth();
  const { data:trendingData, loading:trendingLoading, error:trendingError } = useApiData(API_ENDPOINTS.trendingMovies);

  useEffect(() => {
    console.log("isSignedUP:", isSignedUP);
  }, [isSignedUP]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user); // Set the signed-up state to true
      //link back to home page
      Navigate("/");

      // You can update user profile here if you want to add username
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
    
  };

  const handleSignIn = () => {
    Navigate("/signIn");
  }

  return (
    <div className="signUp">
        <div className="signUpImage" style = {{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingData ? trendingData.results[0].backdrop_path: ""})`,
            
        }}>

        </div>
      <div className="signUpForm">
        <h1>Sign Up</h1>
        <p>Welcome to our movie streaming platform!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
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
          <button type="submit">Sign Up</button>
          
          {error && <p className="error">{error}</p>}
        </form>
        <div><p>already have an account <span onClick={handleSignIn} style={{color: "#ffcc00", cursor: "pointer"}}>signIn</span></p></div>
      </div>
    </div>
  );
}
