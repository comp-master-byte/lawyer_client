import React from "react";
import styles from "./SolutionCard.module.scss";
import icon from "./assets/icon.svg";
import pointer from "./assets/pointer.svg";
import mobilePointerSvg from "./assets/pointer-mobile.svg";

const SolutionCard: React.FC = React.memo(function SolutionCard() {
  return (
    <div className={styles.solutionCardPosition}>
      <img
        src={pointer}
        alt="pointer"
        className={styles.solutionCardPosition__pointer}
      />
      <img
        src={mobilePointerSvg}
        alt="pointer"
        className={styles.mobilePointer}
      />
      <div className={styles.solutionCardWrapper}>
        <div className={styles.solutionCardTitle}>
          <div className={styles.solutionCardTitle__label}>Решение</div>
          <img src={icon} alt="icon" />
        </div>
        <p className={styles.solutionCardWrapper__text}>
          Мы разработали бесплатного юридического помощника Юру, который в
          автоматизированном режиме выдает информацию по бытовым,
          повседневным юридическим вопросам пользователей понятным языком.
        </p>
      </div>
    </div>
  );
});

export default SolutionCard;
