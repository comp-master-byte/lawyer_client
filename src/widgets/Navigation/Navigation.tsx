import React from "react";
import styles from "./Navigation.module.scss";
import MyButton from "../../shared/UI/MyButton/MyButton";
import logo from "./assets/logo.svg";
import vk from "./assets/vk.svg";
import { useNavigation } from "./lib/hooks/useNavigation";

const Navigation: React.FC = React.memo(function Navigation() {
  const {
    scrollToAboutUs,
    scrollToAdvantages,
    scrollToThemes,
    scrollToContacts,
    isNavigationMobileVisible,
    openMobileMavigation,
    closeMobileNavigation
  } = useNavigation();

  return (
    <header className={styles.navigationWrapper}>
      <div className={styles.container}>
        <div className={styles.navigationInner}>
          <img className={styles.navigationInner__vk} src={vk} alt="" />
          <div className={styles.navigationInner__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.navigationLinks}>
            <div
              className={styles.navigationLinks__link}
              onClick={scrollToAboutUs}
            >
              О нас
            </div>
            <div
              className={styles.navigationLinks__link}
              onClick={scrollToAdvantages}
            >
              Преимущества
            </div>
            <div
              className={styles.navigationLinks__link}
              onClick={scrollToThemes}
            >
              Категории и темы
            </div>
            <div
              className={styles.navigationLinks__link}
              onClick={scrollToContacts}
            >
              Контакты
            </div>
          </div>
          <div onClick={openMobileMavigation} className={styles.burgerMenu}>
            <div className={styles.burgerMenu__line}></div>
            <div className={styles.burgerMenu__line}></div>
            <div className={styles.burgerMenu__line}></div>
          </div>
          <div className={styles.navigationEntrance}>
            <MyButton btnClassName={styles.entranceBtn} color="primary" variant="outlined" size="small">
              Войти
            </MyButton>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navigation;
