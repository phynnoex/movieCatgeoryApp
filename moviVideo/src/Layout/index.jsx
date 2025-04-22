import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import "./styles.scss";
import { useAuth } from "../Config/AuthContext";
import { signOut } from "../services/Authentication/signOut";

export default function Layout() {
  const { isSignedUP } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut()
      .then(() => {
        console.log("User signed out successfully");
        // Update the signed-up state to false
        navigate("/"); // Redirect to sign-in page after sign-out
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  console.log("IsSignedUP:", isSignedUP);

  return (
    <>
      <div className="layout">
        <h1>
          movie <br /> Categorizer
        </h1>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          {!isSignedUP && (
            <li>
              <Link to="/signUp">SignUp</Link>
            </li>
          )}
          {!isSignedUP && (
            <li>
              <Link to="/signIn">SignIn</Link>
            </li>
          )}
          {isSignedUP && <Link to="/watchList">WatchList</Link>}
          {isSignedUP && (
            <div className="signOutButton" onClick={handleSignOut}>
              signOut
            </div>
          )}
        </nav>
      </div>
      <Outlet />
    </>
  );
}
