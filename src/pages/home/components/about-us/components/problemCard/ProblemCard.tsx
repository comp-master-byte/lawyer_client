import React from "react";
import styles from "./ProblemCard.module.scss";
import icon from "./assets/icon.svg?url";
import pointer from "./assets/pointer.svg?url";
import mobilePointerSvg from "./assets/pointer-mobile.svg?url";
import bluePointer954 from "../../assets/blue-arrow-954.svg?url";

const ProblemCard: React.FC = React.memo(function ProblemCard() {
  return (
    <div className={styles.problemCardWrapper}>
      <img
        src={pointer}
        alt="pointer"
        className={styles.problemCardWrapper__pointer}
      />
      <img src={mobilePointerSvg} className={styles.mobilePointer} alt="" />
      <img src={bluePointer954} className={styles.bluePointer954} alt="" />

      <div className={styles.problemCardTitle}>
        <div className={styles.problemCardTitle__label}>Проблема</div>
        <img src={icon} alt="icon" />
      </div>
      <p className={styles.problemCardWrapper__text}>
        На рынке оказания юридических услуг сложилось определенное недоверие к
        юристам, так как они объясняют все сложным языком, и пытаются оказать
        как можно больше консультаций за максимальную стоимость.
      </p>
    </div>
  );
});

export default ProblemCard;
