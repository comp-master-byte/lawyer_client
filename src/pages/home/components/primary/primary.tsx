import React, { useCallback } from "react";
import MyButton from "shared/ui/MyButton/MyButton";
import styles from "./primary.module.scss";
import pointer from "./assets/pointer.svg";
import bigHuman from "./assets/big-yura.svg";
import classNames from "classnames";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";
import { authorizationSlice } from "widgets/navigation/model/authorizationSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const Primary: React.FC = React.memo(function PrimaryView() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {toggleSupportChatVisibility} = supportChatSlice.actions;
  const {toggleRegisterModalVisibility} = authorizationSlice.actions;

  const {data, savedChains} = useTypedSelector((state) => state.supportChatSlice);

  const openSupportChat = useCallback(() => {
    if(!data) {
        dispatch(supportChatSlice.actions.toggleLoadingStatus(true));
        const lastNodeId = savedChains[savedChains.length - 1];
        dispatch(fetchMessageNode(lastNodeId));
        dispatch(toggleSupportChatVisibility(true));
    } else {
        dispatch(toggleSupportChatVisibility(true));
    }
}, [savedChains, data])

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
              <MyButton onClick={openSupportChat} color="primary" size="large" variant="contained">
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
    </div>
  );
});

export default Primary;
