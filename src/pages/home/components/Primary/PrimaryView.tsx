import React from "react";
import MyButton from "shared/UI/MyButton/MyButton";
import styles from "./PrimaryView.module.scss";
import pointer from "./assets/pointer.svg";
import bigHuman from "./assets/big-yura.svg";
import classNames from "classnames";

const PrimaryView: React.FC = React.memo(function PrimaryView() {
  return (
    <div className={styles.primaryViewWrapper}>
      <div className={styles.container}>
        <div className={styles.primaryViewInner}>
          <div className={styles.viewLeftColumn}>
            <div className={classNames(styles.viewLeftColumn__title, styles.titleText)}>
              Решите свой <br /> юридический <br /> вопрос
            </div>
            <div className={styles.leftColumnIllustration}>
              <img
                className={styles.leftColumnIllustration__img}
                src={pointer}
                alt="pointer"
              />
              <div className={classNames(styles.leftColumnIllustration__text, styles.italicText)}>
                Задайте свой вопрос бесплатному помощнику Юре или сразу юристу,
                если ваш вопрос сложнее
              </div>
            </div>
            <div className={styles.viewLeftColumn__btn}>
              <MyButton color="primary" size="large" variant="contained">
                Задать вопрос
              </MyButton>
            </div>
          </div>

          <div className={styles.mobileButton}>
              <MyButton color="primary" size="large" variant="contained">
                  Задать вопрос
              </MyButton>
          </div>

          <div className={styles.viewRightColumn}>
            <div className={classNames(styles.viewRightColumn__title, styles.titleText)}>
              Станьте юристом <br /> на нашей <br /> платформе
            </div>
            <div className={classNames(styles.rightColumnItalic, styles.italicText)}>
              Если ты юрист и хочешь решать индивидуальные запросы наших
              клиентов, то регистрируйся!
            </div>
            <div className={styles.viewRightColumn__btn}>
              <MyButton color="secondary" size="large" variant="contained">
                Зарегистрироваться
              </MyButton>
            </div>
          </div>

          <div className={styles.mobileButton}>
              <MyButton color="secondary" size="large" variant="contained">
                Зарегистрироваться
              </MyButton>
          </div>
          <img
            src={bigHuman}
            className={styles.primaryViewInner__human}
            alt="human"
          />


        </div>
      </div>
    </div>
  );
});

export default PrimaryView;
