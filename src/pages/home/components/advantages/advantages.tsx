import React from "react";
import styles from "./advantages.module.scss";
import WhiteCard from "./components/WhiteCard/WhiteCard";
import BlueCard from "./components/BlueCard/BlueCard";
import MyButton from "shared/ui/MyButton/MyButton";
import SectionTitle from "shared/styled-components/SectionTitle/SectionTitle";
import mobileBgLine from "./assets/bg-line.svg";
import { useSupportChatFeatures } from "features/support-chat/hooks/useSupportChatFeatures";
import { useAppDispatch } from "shared/lib/hooks/redux";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";

const Advantages: React.FC = React.memo(function Advantages() {
  const dispatch = useAppDispatch();

  const {openSupportChat} = useSupportChatFeatures();

  return (
    <div className={styles.advantagesWrapper}>
      <SectionTitle>Юра тебе <span>подойдет</span>, <br /> если ты хочешь:</SectionTitle>
        <div className={styles.advantagesContent}>
          <div className={styles.cardsList}>
            <WhiteCard cardClassName={styles.whiteCardLeft}>Получить понятный ответ на свой юридический вопрос</WhiteCard>
            <WhiteCard cardClassName={styles.whiteCardMiddle}>Получить ответ быстро</WhiteCard>
            <WhiteCard cardClassName={styles.whiteCardRight}>Получить ответ бесплатно или за адекватную стоимость</WhiteCard>
          </div>
          <div className={styles.cardsList}>
            <BlueCard cardClassName={styles.blueCardLeft}>
                Мы делаем упор на внятное донесение сложной юридической информации до пользователей.
            </BlueCard>
            <BlueCard cardClassName={styles.blueCardMiddle}>
                Наш сервис дает быстрые автоматизированные ответы.
            </BlueCard>
            <BlueCard cardClassName={styles.blueCardRight}>Это сэкономит вам значительную часть средств, которые могли быть потрачены в каком-нибудь юридическом бюро.</BlueCard>
          </div>
          <div className={styles.whiteCard}>
            <p>
              Если вам понадобится индивидуальный подход <br /> в решении вашей
              проблемы, вы можете оставить заявку для юриста, который сможет
              оперативно решить вопрос за адекватную оплату
            </p>
          </div>

          <div className={styles.advantagesButtons}>
            <MyButton
              onClick={openSupportChat}
              btnClassName={styles.advantagesButtons__primary}
              color="primary"
              variant="contained"
              size="large"
            >
              Воспользоваться бесплатным помощником Юрой
            </MyButton>
            <MyButton
              onClick={() => dispatch(supportChatSlice.actions.toggleLegalAdviceModalVisibility(true))}
              btnClassName={styles.advantagesButtons__secondary}
              color="secondary"
              variant="contained"
              size="large"
            >
              Задать вопрос юристу
            </MyButton>
          </div>
        </div>

        {/* Мобильный контент !!!! */}
        <div className={styles.advantagesMobileContent}> 
            <div className={styles.cards}>
              <div className={styles.topContentCards}>
                  <WhiteCard>
                    Получить понятный ответ на свой юридический вопрос
                  </WhiteCard>
                  <BlueCard>
                      Мы делаем упор на внятное донесение сложной юридической информации до пользователей.
                  </BlueCard>
              </div>
              <div className={styles.middleContentCards}>
                  <WhiteCard>Получить ответ быстро</WhiteCard>
                  <BlueCard>
                    Наш сервис дает быстрые автоматизированные ответы.
                  </BlueCard>
              </div>

              <div className={styles.bottomContentCards}>
                  <WhiteCard>Получить ответ бесплатно или за адекватную стоимость</WhiteCard>
                  <BlueCard>Это сэкономит вам значительную часть средств, которые могли быть потрачены в каком-нибудь юридическом бюро.</BlueCard>
              </div>
            </div>

            <div className={styles.fullWidthCardMobileWrapper}>
              <WhiteCard cardClassName={styles.fullWidthCard}>
              Если вам понадобится индивидуальный подход в решении вашей проблемы, вы можете оставить заявку для юриста, который сможет оперативно решить вопрос за адекватную оплату
              </WhiteCard>
            </div>

            <div className={styles.mobileButtons}>
              <MyButton
                btnClassName={styles.advantagesButtons__primary}
                onClick={openSupportChat}
                color="primary"
                variant="contained"
                size="small"
              >
                Воспользоваться бесплатным помощником Юрой
              </MyButton>
              <MyButton
                btnClassName={styles.advantagesButtons__secondary}
                onClick={() => dispatch(supportChatSlice.actions.toggleLegalAdviceModalVisibility(true))}
                color="secondary"
                variant="contained"
                size="small"
              >
                Задать вопрос юристу
              </MyButton>
            </div>
        </div>
    </div>
  );
});

export default Advantages;
