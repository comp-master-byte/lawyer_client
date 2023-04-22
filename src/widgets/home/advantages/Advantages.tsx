import React, { FC } from "react";
import styles from "./Advantages.module.scss";
import CardsList from "./components/CardsList/CardsList";
import { firstRowContent, secondRowContent } from "./lib/mocks/advantagesMocks";
import WhiteCard from "./components/WhiteCard/WhiteCard";
import BlueCard from "./components/BlueCard/BlueCard";

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
        </div>
      </div>
    </div>
  );
};

export default Advantages;
