import React from "react";
import styles from "./WhiteCard.module.scss";
import classNames from "classnames";

interface WhiteCardProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  cardClassName: string;
}

const WhiteCard: React.FC<WhiteCardProps> = React.memo(function WhiteCard({
  children,
  cardClassName,
  fullWidth,
}) {
  return (
    <div
      className={classNames(styles.whiteCardWrapper, cardClassName, {
        [styles.whiteCardFullWidth]: fullWidth,
      })}
    >
      {children}
    </div>
  );
});

export default WhiteCard;
