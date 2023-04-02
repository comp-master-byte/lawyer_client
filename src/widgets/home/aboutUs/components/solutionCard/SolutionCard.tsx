import React from "react";
import styles from "./SolutionCard.module.scss";
import icon from "./assets/icon.svg";

const SolutionCard = () => {
  return (
    <div className={styles.solutionCardWrapper}>
      <div className={styles.solutionCardTitle}>
        <p className={styles.solutionCardTitle__label}>Решение</p>
        <img src={icon} alt="icon" />
      </div>
      <p className={styles.solutionCardWrapper__text}>
        Мы разработали бесплатного юридического помощника Юру, который в
        автоматизированном режиме выдает информацию <br /> по бытовым,
        повседневным юридическим вопросам пользователей понятным языком.
      </p>
    </div>
  );
};

export default SolutionCard;
