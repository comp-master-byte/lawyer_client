import React from "react";
import styles from "./CardsList.module.scss";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function CardsList<T>(props: ListProps<T>) {
  return (
    <div className={styles.cardsListWrapper}>
      {props.items.map(props.renderItem)}
    </div>
  );
}
