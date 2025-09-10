import { useState } from "react";
import styles from "./HoverCard.module.css";

function HoverCard({ children, description, position = "bottom" }) {
  const [isHovered, setIsHovered] = useState(false);

  // Determina a classe do card com base na prop 'position'
  const cardClasses = `${styles.descriptionCard} ${styles[position]}`;

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className={cardClasses}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default HoverCard;