import React from "react";
import styles from "./Navigation.module.scss";
import MyButton from "../../shared/UI/MyButton/MyButton";
import logo from "./assets/logo.svg";
import vk from "./assets/vk.svg";

const Navigation: React.FC = React.memo(function Navigation() {
  return (
    <header className={styles.navigationWrapper}>
      <div className={styles.container}>
        <div className={styles.navigationInner}>
          <img className={styles.navigationInner__vk} src={vk} alt="" />
          <div className={styles.navigationInner__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.navigationLinks}>
            <div className={styles.navigationLinks__link}>О нас</div>
            <div className={styles.navigationLinks__link}>Преимущества</div>
            <div className={styles.navigationLinks__link}>Категории и темы</div>
            <div className={styles.navigationLinks__link}>Контакты</div>
          </div>
          <div className={styles.burgerMenu}>
            <div className={styles.burgerMenu__line}></div>
            <div className={styles.burgerMenu__line}></div>
            <div className={styles.burgerMenu__line}></div>
          </div>
          <div className={styles.navigationEntrance}>
            <MyButton color="primary" variant="outlined" size="small">
              Войти
            </MyButton>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navigation;
