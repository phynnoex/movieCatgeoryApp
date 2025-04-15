import "./styles.scss";

export default function RatingStars({ rating }) {
  return (
    <div className="rating">
      <div className="stars">
        {Array(5)
          .fill()
          .map((_, index) => (
            <span
              key={index}
              className={
                index < Math.round((rating / 10) * 5) ? "star-filled" : "star"
              }
            >
              ★
            </span>
          ))}
      </div>
      <span className="score">{Math.round((rating / 10) * 5).toFixed(1)}</span>
    </div>
  );
}
