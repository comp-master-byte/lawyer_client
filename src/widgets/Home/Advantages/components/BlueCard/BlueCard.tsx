import React, { FC } from "react";
import styles from "./BlueCard.module.scss";

interface BlueCardProps {
  text: string;
  width: number;
}

const BlueCard: FC<BlueCardProps> = ({ text, width }) => {
  return (
    <div style={{ width }} className={styles.blueCardWrapper}>
      {text}
    </div>
  );
};

export default BlueCard;
