import React from "react";
import styles from "./Additional.module.scss";
import icon from "./assets/icon.svg?url";

const AdditionalCard: React.FC = React.memo(function AdditionalCard() {
  return (
    <div className={styles.additionalCardWrapper}>
      <div className={styles.additionalCardTitle}>
        <div className={styles.additionalCardTitle__label}>Также</div>
        <img src={icon} alt="icon" />
      </div>
      <p className={styles.additionalCardWrapper__text}>
        В случае наличия у вас более индивидуального запроса вы сможете
        обратиться к действующему юристу на нашей платформе за
        адекватную оплату.
      </p>
    </div>
  );
});

export default AdditionalCard;
