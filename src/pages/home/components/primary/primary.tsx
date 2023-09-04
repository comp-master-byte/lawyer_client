import React from "react";
import MyButton from "shared/ui/MyButton/MyButton";
import styles from "./primary.module.scss";
import pointer from "./assets/pointer.svg";
import bigHuman from "./assets/big-yura.svg";
import classNames from "classnames";
import { useAppDispatch } from "shared/lib/hooks/redux";
import { authorizationSlice } from "widgets/navigation/model/authorizationSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSupportChatFeatures } from "features/support-chat/hooks/useSupportChatFeatures";


const Primary: React.FC = React.memo(function PrimaryView() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {toggleRegisterModalVisibility} = authorizationSlice.actions;

  const {openSupportChat} = useSupportChatFeatures();

  return (
    <div className={styles.primaryViewWrapper}>
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
              <MyButton onClick={openSupportChat} color="primary" size="large" variant="contained">
                Задать вопрос
              </MyButton>
            </div>
          </div>

          <div className={styles.mobileButton}>
              <MyButton onClick={openSupportChat} color="primary" size="large" variant="contained">
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
              {Cookies.get('token') && JSON.parse(Cookies.get('token') as string) 
                ? 
                  <MyButton onClick={() => navigate('/cabinet/appeals')} color="secondary" size="large" variant="contained">
                    Войти в профиль
                  </MyButton>
                :
              
                  <MyButton onClick={() => dispatch(toggleRegisterModalVisibility(true))} color="secondary" size="large" variant="contained">
                    Зарегистрироваться
                  </MyButton>
              }
            </div>
          </div>

          <div className={styles.mobileButton}>
              {Cookies.get('token') && JSON.parse(Cookies.get('token') as string) 
                ? 
                  <MyButton onClick={() => navigate('/cabinet/appeals')} color="secondary" size="large" variant="contained">
                    Войти в профиль
                  </MyButton>
                :
              
                  <MyButton onClick={() => dispatch(toggleRegisterModalVisibility(true))} color="secondary" size="large" variant="contained">
                    Зарегистрироваться
                  </MyButton>
              }
          </div>
          <img
            src={bigHuman}
            className={styles.primaryViewInner__human}
            alt="human"
          />
        </div>
    </div>
  );
});

export default Primary;
