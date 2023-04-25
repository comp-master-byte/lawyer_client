import React from "react";
import styles from "./LawyerAssistant.module.scss";
import assistant from "./assets/assistant.svg";

const LawyerAssistant: React.FC = React.memo(function LawyerAssistant() {
  return (
    <div className={styles.lawyerAssistantWrapper}>
      <img
        src={assistant}
        alt="assistant"
        className={styles.lawyerAssistantWrapper__assistant}
      />
      <div className={styles.lawyerAssistantCards}>
        <div className={styles.lawyerTopCard}>
          Юра от слова “юридический”, это имя нашего юридического
          автоматизированного помощника, олицетворяющего сервис.
        </div>
        <div className={styles.lawyerBottomCard}>
          Он прав, потому что оказывает услуги профессионально <br /> и
          доступным языком.
        </div>
      </div>
    </div>
  );
});

export default LawyerAssistant;
