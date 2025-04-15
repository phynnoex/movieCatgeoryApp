import "./styles.scss";
import { motion } from "framer-motion";

export default function CategoriesCard({CategoryName}) {
  const gradientColors = [
    "linear-gradient(180deg, rgba(253, 177, 0, 0.3) 0%, rgba(48, 34, 1, 0.1) 100%)",
    "linear-gradient(180deg, rgba(0, 115, 255, 0.3) 0%, rgba(2, 18, 53, 0.1) 100%)",
    "linear-gradient(180deg, rgba(144, 0, 255, 0.3) 0%, rgba(30, 1, 48, 0.1) 100%)",
  ];
  return (
    <motion.div
      className="categoriesCard"
      style={{
        background:
          gradientColors[Math.floor(Math.random() * gradientColors.length)],
      }}

        whileHover={{ scale: 1.02, cursor: "pointer" }}
    >
      <p>{CategoryName}</p>
    </motion.div>
  );
}
