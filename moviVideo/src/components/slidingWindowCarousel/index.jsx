import React, { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowLeft,
  FaBeer,
  FaCross,
} from "react-icons/fa";
import "./styles.scss";

const SlidingWindowCarousel = ({ items }) => {
  const [startIndex, setStartIndex] = useState(0);
  const windowSize = 4;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + windowSize < items.length;

  const handleLeft = () => {
    if (canGoLeft) setStartIndex(startIndex - 1);
  };

  const handleRight = () => {
    if (canGoRight) setStartIndex(startIndex + 1);
  };

  const visibleItems = items.slice(startIndex, startIndex + windowSize);

  return (
    <div className="CastCarousel">
      <div
        className="arrowContainer"
        onClick={handleLeft}
        disabled={!canGoLeft}
      >
        <FaAngleLeft />
      </div>
      <div className="CastMembers">
        {visibleItems.map((item, index) => (
          <div className="CastMember" key={index}>
            <div className="castMemberImg" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.profile_path})`,
            }}></div>
            <p>{item.original_name}</p>
          </div>
        ))}
      </div>
      <div
        className="arrowContainer"
        onClick={handleRight}
        disabled={!canGoRight}
      >
        <FaAngleRight />
      </div>
    </div>
  );
};

export default SlidingWindowCarousel;
