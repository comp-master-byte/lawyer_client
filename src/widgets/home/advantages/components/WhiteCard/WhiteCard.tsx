import React, { FC } from "react";
import styles from "./WhiteCard.module.scss";

interface WhiteCardProps {
  text: string;
  width: number;
}

const WhiteCard: FC<WhiteCardProps> = ({ text, width }) => {
  return (
    <div style={{ width }} className={styles.whiteCardWrapper}>
      {text}
    </div>
  );
};

export default WhiteCard;
