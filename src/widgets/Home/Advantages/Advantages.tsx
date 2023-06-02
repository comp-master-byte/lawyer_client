import React from "react";
import styles from "./Advantages.module.scss";
import WhiteCard from "./components/WhiteCard/WhiteCard";
import BlueCard from "./components/BlueCard/BlueCard";
import MyButton from "../../../shared/UI/MyButton/MyButton";

const Advantages: React.FC = React.memo(function Advantages() {
  return (
    <div className={styles.advantagesWrapper}>
      <h1 className={styles.advantagesWrapper__title}>
        Юра тебе <span>подойдет</span>, если ты хочешь:
      </h1>
      <div className={styles.container}>
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
              btnClassName={styles.advantagesButtons__primary}
              color="primary"
              variant="contained"
              size="large"
            >
              Воспользоваться бесплатным помощником Юрой
            </MyButton>
            <MyButton
              btnClassName={styles.advantagesButtons__secondary}
              color="secondary"
              variant="contained"
              size="large"
            >
              Задать вопрос юристу
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Advantages;
