import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { AuthProvider } from "./Config/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter basename='/movieCatgeoryApp'>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
