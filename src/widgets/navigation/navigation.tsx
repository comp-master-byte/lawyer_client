import React from "react";
import styles from "./navigation.module.scss";
import MyButton from "../../shared/UI/MyButton/MyButton";
import logo from "./assets/logo.svg";
import vk from "./assets/vk.svg";
import { useNavigation } from "./lib/hooks/useNavigation";
import classNames from "classnames";

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
    <header className={classNames(styles.navigationWrapper, {
      [styles.mobileNavigationWrapper]: isNavigationMobileVisible
    })}>
      <div className={styles.container}>
        <div className={styles.navigationInner}>
          <img className={styles.navigationInner__vk} src={vk} alt="" />
          <div className={styles.navigationInner__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classNames(styles.navigationLinks, {
            [styles.activeMobileNavigation]: isNavigationMobileVisible,
            [styles.closedMobileNavigation]: !isNavigationMobileVisible
          })}>
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
            <MyButton btnClassName={styles.entranceBtnMobile} color="primary" variant="outlined" size="small">
              Войти
            </MyButton>
          </div>
          <div onClick={isNavigationMobileVisible ? closeMobileNavigation : openMobileMavigation} className={classNames(styles.burgerMenu, {
            [styles.openedNavigationBurgerMenu]: isNavigationMobileVisible,
          })}>
            <div className={classNames(styles.burgerMenu__line, styles.line1)}></div>
            <div className={classNames(styles.burgerMenu__line, styles.line2)}></div>
            <div className={classNames(styles.burgerMenu__line, styles.line3)}></div>
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
