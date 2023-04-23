import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import logo from "./assets/logo.svg";
import vk from "./assets/vk.svg";

import MyButton from "../../shared/UI/MyButton/MyButton";

const Navigation: FC = () => {
  return (
    <header className={styles.navigationWrapper}>
      <div className={styles.container}>
        <div className={styles.navigationInner}>
          <div className={styles.navigationInner__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.navigationLinks}>
            <div className={styles.navigationLinks__link}>О нас</div>
            <div className={styles.navigationLinks__link}>Преимущества</div>
            <div className={styles.navigationLinks__link}>Категории и темы</div>
            <div className={styles.navigationLinks__link}>Контакты</div>
          </div>
          <div className={styles.navigationEntrance}>
            <MyButton color="primary" variant="outlined" size="small">
              Войти
            </MyButton>
            <img src={vk} alt="lk" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
