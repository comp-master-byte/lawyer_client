import React, { FC } from "react";
import styles from "./Advantages.module.scss";

const Advantages: FC = () => {
  return (
    <div className={styles.advantagesWrapper}>
      <h1 className={styles.advantagesWrapper__title}>
        Юра тебе <span>подойдет</span>, если ты хочешь:
      </h1>
      <div className={styles.container}>
        <div className={styles.advantagesContent}></div>
      </div>
    </div>
  );
};

export default Advantages;
