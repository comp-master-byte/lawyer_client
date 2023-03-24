import React from "react";
import MyButton from "../UI/MyButton/MyButton";
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
            <div className={styles.viewLeftColumn__btn}>
              <MyButton color="primary" size="large" variant="contained">
                Задать вопрос
              </MyButton>
            </div>
          </div>
          <div className={styles.viewRightColumn}>
            <div className={styles.viewRightColumn__title}>
              Станьте юристом <br /> на нашей <br /> платформе
            </div>
            <div className={styles.viewRightColumn__btn}>
              <MyButton color="secondary" size="large" variant="contained">
                Зарегистрироваться
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryView;
