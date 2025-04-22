import React, { useState } from "react";
import "./styles.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      

      <div className="footer-container">
        <div className="footer-logo">
          <span
            className="logo-text"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setTimeout(() => {
                window.location.reload();
              }, 700);
            }}
            style={{ cursor: "pointer" }}
          >
            Movie <br />Categorizer
          </span>

          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebook fontSize={30}/>
            </a>
            <a href="#" className="social-icon">
              <FaInstagram fontSize={30}/>
            </a>
            <a href="#" className="social-icon">
              <FaTwitter fontSize={30}/>
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>
            <a href="mailto:fansurveys25@gmail.com">movieCategory25@gmail.com</a>
          </p>
          <p>
           Get details on all your favourite movies and shows, also see upcoming movies and top-rated movies
          </p>
          <p>
            <a href="tel:+12268833114">+1 (226)-883-3114</a>
          </p>
        </div>

        
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 <span>MovieCatgorizer</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;