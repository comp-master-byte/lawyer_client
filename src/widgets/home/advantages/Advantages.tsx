import React, { FC } from "react";
import styles from "./Advantages.module.scss";
import CardsList from "./components/CardsList/CardsList";
import { firstRowContent, secondRowContent } from "./lib/mocks/advantagesMocks";
import WhiteCard from "./components/WhiteCard/WhiteCard";
import BlueCard from "./components/BlueCard/BlueCard";
import MyButton from "../../../shared/MyButton/MyButton";

const Advantages: FC = () => {
  return (
    <div className={styles.advantagesWrapper}>
      <h1 className={styles.advantagesWrapper__title}>
        Юра тебе <span>подойдет</span>, если ты хочешь:
      </h1>
      <div className={styles.container}>
        <div className={styles.advantagesContent}>
          <CardsList
            items={firstRowContent}
            renderItem={(card) => (
              <WhiteCard key={card.id} text={card.text} width={card.width} />
            )}
          />
          <CardsList
            items={secondRowContent}
            renderItem={(card) => (
              <BlueCard key={card.id} text={card.text} width={card.width} />
            )}
          />
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
};

export default Advantages;
