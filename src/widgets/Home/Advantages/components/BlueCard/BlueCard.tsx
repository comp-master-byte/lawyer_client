import React from "react";
import styles from "./BlueCard.module.scss";

interface BlueCardProps {
  text: string;
  width: number;
}

const BlueCard: React.FC<BlueCardProps> = React.memo(function BlueCard({
  text,
  width,
}) {
  return (
    <div style={{ width }} className={styles.blueCardWrapper}>
      {text}
    </div>
  );
});

export default BlueCard;
