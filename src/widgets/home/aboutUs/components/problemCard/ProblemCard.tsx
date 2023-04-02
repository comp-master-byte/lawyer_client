import styles from "./ProblemCard.module.scss";
import icon from "./assets/icon.svg";

const ProblemCard = () => {
  return (
    <div className={styles.solutionCardWrapper}>
      <div className={styles.solutionCardTitle}>
        <div className={styles.solutionCardTitle__label}>Проблема</div>
        <img src={icon} alt="icon" />
      </div>
      <p className={styles.solutionCardWrapper__text}>
        На рынке оказания юридических услуг сложилось определенное недоверие к
        юристам, так как они объясняют все сложным языком, и пытаются оказать
        как можно больше консультаций за максимальную стоимость.
      </p>
    </div>
  );
};

export default ProblemCard;
