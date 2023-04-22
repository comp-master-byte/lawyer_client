import React, { FC } from "react";
import styles from "./WhiteCard.module.scss";

interface WhiteCardProps {
  text: string;
}

const WhiteCard: FC<WhiteCardProps> = ({ text }) => {
  return <div className={styles.whiteCardWrapper}>{text}</div>;
};

export default WhiteCard;
