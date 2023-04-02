import styles from "./AboutUs.module.scss";
import ProblemCard from "./components/problemCard/ProblemCard";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsWrapper}>
      <div className={styles.container}>
        <div className={styles.aboutUsInner}>
          <p className={styles.aboutUsInner__title}>
            Наша цель — сделать юридическую помощь не только доступной, но и
            понятной обычному пользователю
          </p>
          <div className={styles.aboutUsCards}>
            <ProblemCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
