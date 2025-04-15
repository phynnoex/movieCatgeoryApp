import "./styles.scss";
import bgImage from "../../assets/wallpapersden.com_new-terminator-dark-fate_ws.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ExpandedDetails from "../ExpandedDetails";

export default function MovieCard(props) {
  const [hovered, setHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
      console.log("overflow hidden")
    } else {
      document.body.style.overflow = "auto";
      console.log("overflow scroll")
    }
    console.log("showDetails", showDetails)
  }
  , [showDetails]);

  return (
    <>
      <motion.div
        className="movieCard"
        whileHover={{ scale: 1.02, cursor: "pointer" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          backgroundImage: `url(${props.image ? `https://image.tmdb.org/t/p/w500${props.image}` : bgImage})`,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => {setShowDetails(true)}}
      >
        {hovered ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            className="viewDetails"
          >
            view Details
          </motion.div>
        ) : (
          ""
        )}
        <motion.div
          className="movieCardDescription"
          style={{
            background: hovered
              ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))"
              : "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))",
          }}
        >
          <div className="movieCardDescriptionText">
            <h3>{props.title}</h3>
            <p>{props.date.slice(0,4)}</p>
          </div>
          <div className="movieCardDescriptionRating">
            <div className="star">★</div>
            <div className="score">{(props.rating /10 * 5).toFixed(1)}</div>
          </div>
        </motion.div>
      </motion.div>
      {showDetails ? (<ExpandedDetails setShowmodal={setShowDetails} movieId={props.id} showModal={showDetails}/>): ""}
    </>
  );
}
