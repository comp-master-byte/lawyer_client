import React from "react";
import styles from "./NavigationLinks.module.scss";
import toTop from "./assets/toTop.svg";
import person from "../../assets/yura.svg";
import { useScrollTo } from "shared/lib/hooks/useScrollTo";

const NavigationLinks: React.FC = React.memo(function NavigationLinks() {
  const {scrollToAboutUs, scrollToAdvantages, scrollToContacts, scrollToThemes} = useScrollTo();
  return (
    <div className={styles.navigationLinksWrapper}>
      <img src={person} className={styles.person} alt="" />
      <ul className={styles.navigationLinks}>
        <li onClick={scrollToAboutUs} className={styles.link}>О нас</li>
        <li onClick={scrollToAdvantages} className={styles.link}>Преимущества</li>
        <li onClick={scrollToThemes} className={styles.link}>Категории и темы</li>
        <li onClick={scrollToContacts} className={styles.link}>Контакты</li>
      </ul>
      <div className={styles.pointerWrapper} onClick={() => window.scrollTo({behavior: "smooth", top: 0})}>
        <img className={styles.pointer} src={toTop} alt="" />
      </div>
    </div>
  );
});

export default NavigationLinks;
