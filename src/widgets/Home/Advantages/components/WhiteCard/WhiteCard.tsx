import React from "react";
import styles from "./WhiteCard.module.scss";
import classNames from "classnames";

interface WhiteCardProps {
  text: string;
  width: number | string;
  fullWidth?: boolean;
}

const WhiteCard: React.FC<WhiteCardProps> = React.memo(function WhiteCard({
  text,
  width,
  fullWidth,
}) {
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
});

export default WhiteCard;
