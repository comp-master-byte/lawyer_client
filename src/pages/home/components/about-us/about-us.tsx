import React, { FC } from "react";
import styles from "./about-us.module.scss";
import AdditionalCard from "./components/additionalCard/AdditionalCard";
import ProblemCard from "./components/problemCard/ProblemCard";
import SolutionCard from "./components/solutionCard/SolutionCard";
import LawyerAssistant from "./components/lawyerAssistant/LawyerAssistant";
import SectionTitle from "@/shared/styled-components/SectionTitle/SectionTitle";

const AboutUs: FC = React.memo(function AboutUs() {
  return (
    <div className={styles.aboutUsWrapper}>
        <div className={styles.aboutUsInner}>
          <div className={styles.titleTextAndSupportBot}>
            <SectionTitle titleClassName={styles.titleText}>
              Наша цель — сделать юридическую помощь не только доступной, но и
              понятной обычному пользователю
            </SectionTitle>

          </div>

          <div className={styles.aboutUsCards}>
            <ProblemCard />
            <div className={styles.leftCards}>
              <SolutionCard />
              <AdditionalCard />
            </div>
          </div>

          <SectionTitle>
            Почему Юра <span className={styles.titleEmphasized}>прав</span>?
          </SectionTitle>

          <LawyerAssistant />
        </div>
    </div>
  );
});

export default AboutUs;
