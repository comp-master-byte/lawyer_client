import React from "react";
import styles from "./LawyerAssistant.module.scss";
import assistant from "./assets/assistant.svg?url";
import mobileAssistantSvg from "../../assets/yura-mobile.svg?url";
import cloudSvg from "../../assets/cloud.svg?url";
import rightCloudSvg from "../../assets/rightCloud.svg?url";

const LawyerAssistant: React.FC = React.memo(function LawyerAssistant() {
  return (
    <div className={styles.lawyerAssistantWrapper}>
      <img
        src={assistant}
        alt="assistant"
        className={styles.lawyerAssistantWrapper__assistant}
      />
      <img
        src={mobileAssistantSvg}
        alt="assistant"
        className={styles.lawyerMobile}
      />
      <div className={styles.dialogueCloud}>
          <p className={styles.dialogueCloudInner}>
            Меня создал специалист <br /> с юридическим <br /> образованием <br /> и опытом
          </p>
          <img src={cloudSvg} className={styles.leftImg} alt="" />
          <img src={rightCloudSvg} className={styles.rightImg} alt="" />
      </div>
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
