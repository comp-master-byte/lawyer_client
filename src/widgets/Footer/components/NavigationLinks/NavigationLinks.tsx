import React from "react";
import styles from "./NavigationLinks.module.scss";
import toTop from "./assets/toTop.svg";
import person from "../../assets/yura.svg";

const NavigationLinks: React.FC = React.memo(function NavigationLinks() {
  return (
    <div className={styles.navigationLinksWrapper}>
      <img src={person} className={styles.person} alt="" />
      <ul className={styles.navigationLinks}>
        <li className={styles.link}>О нас</li>
        <li className={styles.link}>Преимущества</li>
        <li className={styles.link}>Категории и темы</li>
        <li className={styles.link}>Контакты</li>
      </ul>
      <img className={styles.pointer} src={toTop} alt="" />
    </div>
  );
});

export default NavigationLinks;
