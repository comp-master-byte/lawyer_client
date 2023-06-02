import React from "react";
import styles from "./BlueCard.module.scss";
import classNames from "classnames";

interface BlueCardProps {
  children: React.ReactNode;
  cardClassName?: string;
}

const BlueCard: React.FC<BlueCardProps> = React.memo(function BlueCard({
  children,
  cardClassName
}) {
  return (
    <div className={classNames(styles.blueCardWrapper, cardClassName)}>
      {children}
    </div>
  );
});

export default BlueCard;
