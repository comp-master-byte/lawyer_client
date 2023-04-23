import React, { FC } from "react";
import styles from "./WhiteCard.module.scss";
import classNames from "classnames";

interface WhiteCardProps {
  text: string;
  width: number | string;
  fullWidth?: boolean;
}

const WhiteCard: FC<WhiteCardProps> = ({ text, width, fullWidth }) => {
  return (
    <div
      style={{ width }}
      className={classNames(styles.whiteCardWrapper, {
        [styles.whiteCardFullWidth]: fullWidth,
      })}
    >
      {text}
    </div>
  );
};

export default WhiteCard;
