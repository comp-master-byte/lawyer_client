import React, { FC } from "react";
import styles from "./AboutUs.module.scss";
import AdditionalCard from "./components/additionalCard/AdditionalCard";
import ProblemCard from "./components/problemCard/ProblemCard";
import SolutionCard from "./components/solutionCard/SolutionCard";
import LawyerAssistant from "./components/lawyerAssistant/LawyerAssistant";
import SectionTitle from "../../../shared/Styled-Components/SectionTitle/SectionTitle";

const AboutUs: FC = React.memo(function AboutUs() {
  return (
    <div className={styles.aboutUsWrapper}>
      <div className={styles.container}>
        <div className={styles.aboutUsInner}>
          <SectionTitle>
            Наша цель — сделать юридическую помощь не только доступной, но и
            понятной обычному пользователю
          </SectionTitle>
          <div className={styles.aboutUsCards}>
            <ProblemCard />
            <SolutionCard />
            <AdditionalCard />
          </div>

          <p className={styles.aboutUsInner__title}>
            Почему Юра <span className={styles.titleEmphasized}>прав</span>?
          </p>

          <LawyerAssistant />
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
