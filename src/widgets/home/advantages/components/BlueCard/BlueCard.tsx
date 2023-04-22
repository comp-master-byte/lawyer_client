import React, { FC } from "react";
import styles from "./BlueCard.module.scss";

interface BlueCardProps {
  text: string;
}

const BlueCard: FC<BlueCardProps> = ({ text }) => {
  return <div className={styles.blueCardWrapper}>{text}</div>;
};

export default BlueCard;
