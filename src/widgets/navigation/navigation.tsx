import React from "react";
import styles from "./navigation.module.scss";
import MyButton from "shared/ui/MyButton/MyButton";
import logo from "./assets/logo.svg";
import vk from "./assets/vk.svg";
import { useNavigation } from "./lib/hooks/useNavigation";
import classNames from "classnames";
import { VK_LINK } from "shared/constants/constants";
import { useSignIn } from "./lib/hooks/useSignIn";
import SignInModal from "./components/SignInModal/SignInModal";

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

    const {
      isSignInModalVisible,
      openSignInModal,
      closeSignInModal
    } = useSignIn();

    return (
        <header className={classNames(styles.navigationWrapper, {
          [styles.mobileNavigationWrapper]: isNavigationMobileVisible
        })}>
            <SignInModal 
                closeSignInModal={closeSignInModal} 
                isSignInModalVisible={isSignInModalVisible}
            />
          
            <div className={styles.container}>
                <div className={styles.navigationInner}>
                    <a href={VK_LINK} target="_blank">
                      <img className={styles.navigationInner__vk} src={vk} alt="" />
                    </a>
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
                      <MyButton 
                          size="small"
                          color="primary" 
                          variant="outlined" 
                          btnClassName={styles.entranceBtnMobile} 
                      >
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
                    <MyButton 
                        size="small"
                        color="primary" 
                        variant="outlined" 
                        onClick={openSignInModal}
                        btnClassName={styles.entranceBtn} 
                    >
                        Войти
                    </MyButton>
                </div>

              </div>
            </div>
        </header>
    );
});

export default Navigation;
