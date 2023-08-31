import React from "react";
import styles from "./navigation.module.scss";
import MyButton from "shared/ui/MyButton/MyButton";
import logo from "./assets/logo.svg";
import vk from "./assets/vk.svg";
import { useNavigation } from "./lib/hooks/useNavigation";
import classNames from "classnames";
import { VK_LINK } from "shared/constants/constants";
import { useAuthorization } from "./lib/hooks/useAuthorization";
import ForgetPasswordModal from "./components/forget-password-modal/forget-password-modal";
import SignInModal from "./components/sign-in-modal/sign-in-modal";
import SignUpModal from "./components/sign-up-modal/sign-up-modal";
import { isMobile } from "shared/lib/helpers/isMobile";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useScrollTo } from "shared/lib/hooks/useScrollTo";

const Navigation: React.FC = React.memo(function Navigation() {
    const navigate = useNavigate();

    const {
      scrollToAboutUs, 
      scrollToAdvantages, 
      scrollToContacts, 
      scrollToThemes
    } = useScrollTo();

    const {
      isNavigationMobileVisible,
      openMobileMavigation,
      closeMobileNavigation
    } = useNavigation();

    const {
      isSignInModalVisible,
      openSignInModal,
      closeSignInModal,
      openSignUpModal,
      backToSignInFromForget,
      openForgetPasswordModal,
      closeForgetPasswordModal,
      isForgetPasswordModalVisible
    } = useAuthorization();

    return (
        <header className={classNames(styles.navigationWrapper, {
          [styles.mobileNavigationWrapper]: isNavigationMobileVisible
        })}>
            <SignInModal 
                openSignUpModal={openSignUpModal}
                closeSignInModal={closeSignInModal} 
                isSignInModalVisible={isSignInModalVisible}
                openForgetPasswordModal={openForgetPasswordModal}
            />

            <SignUpModal openSignInModal={openSignInModal} />

            <ForgetPasswordModal 
                openSignInModal={backToSignInFromForget}
                closeForgetPasswordModal={closeForgetPasswordModal}
                isForgetPasswordModalVisible={isForgetPasswordModalVisible}
            />
          
            <div className={styles.container}>
                <div className={styles.navigationInner}>
                    {isMobile && <a href={VK_LINK} target="_blank">
                      <img className={styles.navigationInner__vk} src={vk} alt="" />
                    </a>}
                    <Link to='/'>
                      <div className={styles.navigationInner__logo}>
                          <img src={logo} alt="logo" />
                      </div>
                    </Link>
                    <div className={classNames(styles.navigationLinks, {
                      [styles.activeMobileNavigation]: isNavigationMobileVisible,
                      [styles.closedMobileNavigation]: !isNavigationMobileVisible
                    })}>
                      <div
                        className={styles.navigationLinks__link}
                        onClick={() => {
                          scrollToAboutUs();
                          closeMobileNavigation();
                        }}
                      >
                        О нас
                      </div>
                      <div
                        className={styles.navigationLinks__link}
                        onClick={() => {
                            scrollToAdvantages();
                            closeMobileNavigation();
                        }}
                      >
                        Преимущества
                      </div>
                      <div
                        className={styles.navigationLinks__link}
                        onClick={() => {
                          scrollToThemes();
                          closeMobileNavigation();
                        }}
                      >
                        Категории и темы
                      </div>
                      <div
                        className={styles.navigationLinks__link}
                        onClick={() => {
                            scrollToContacts();
                            closeMobileNavigation();
                        }}
                      >
                        Контакты
                      </div>
                      {Cookies.get('token') 
                        ? 
                          <MyButton 
                              size="small"
                              color="primary" 
                              variant="outlined" 
                              btnClassName={styles.entranceBtnMobile} 
                              onClick={() => navigate('/cabinet/appeals')}
                          >
                              Профиль
                          </MyButton>
                        : 
                          <MyButton 
                              size="small"
                              color="primary" 
                              variant="outlined" 
                              btnClassName={styles.entranceBtnMobile} 
                              onClick={() => {
                                closeMobileNavigation();
                                openSignInModal();
                              }}
                          >
                            Войти
                          </MyButton>
                        }
                  </div>


                <div onClick={isNavigationMobileVisible ? closeMobileNavigation : openMobileMavigation} className={classNames(styles.burgerMenu, {
                  [styles.openedNavigationBurgerMenu]: isNavigationMobileVisible,
                })}>
                  <div className={classNames(styles.burgerMenu__line, styles.line1)}></div>
                  <div className={classNames(styles.burgerMenu__line, styles.line2)}></div>
                  <div className={classNames(styles.burgerMenu__line, styles.line3)}></div>
                </div>

                <div className={styles.navigationEntrance}>
                  {Cookies.get('token') 
                    ?
                        <MyButton 
                            size="small"
                            color="primary" 
                            variant="outlined" 
                            onClick={() => navigate('/cabinet/appeals')}
                            btnClassName={styles.entranceBtn} 
                        >
                            Профиль
                        </MyButton>
                    :
                        <MyButton 
                            size="small"
                            color="primary" 
                            variant="outlined" 
                            onClick={openSignInModal}
                            btnClassName={styles.entranceBtn} 
                        >
                            Войти
                        </MyButton>
                    }
                </div>

              </div>
            </div>
        </header>
    );
});

export default Navigation;
