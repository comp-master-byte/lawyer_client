import React from "react";
import styles from "./PrimaryView.module.scss";

const PrimaryView = () => {
  return (
    <div className={styles.primaryViewWrapper}>
      <div className={styles.container}>
        <div className={styles.primaryViewInner}>
          <div className={styles.viewLeftColumn}>
            <div className={styles.viewLeftColumn__title}>
              Решите свой <br /> юридический <br /> вопрос
            </div>
          </div>
          <div className={styles.viewRightColumn}>
            <div className={styles.viewRightColumn__title}>
              Станьте юристом <br /> на нашей <br /> платформе
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryView;
