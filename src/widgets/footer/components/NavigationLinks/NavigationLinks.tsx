import React from "react";
import styles from "./NavigationLinks.module.scss";
import toTop from "./assets/toTop.svg?url";
import person from "../../assets/yura.svg?url";
import { useScrollTo } from "@/shared/lib/hooks/useScrollTo";
import { isMobile } from "@/shared/lib/helpers/isMobile";

const NavigationLinks: React.FC = React.memo(function NavigationLinks() {
  const {scrollToAboutUs, scrollToAdvantages, scrollToContacts, scrollToThemes} = useScrollTo();
  return (
    <div className={styles.navigationLinksWrapper}>
      <img src={person} className={styles.person} alt="" />
      <ul className={styles.navigationLinks}>
        <li onClick={() => {
            if(isMobile) {
                scrollToAboutUs(950)
            } else {
                scrollToAboutUs(993)
            }
        }} className={styles.link}>О нас</li>
        <li onClick={() => {
            if(isMobile) {
                scrollToAdvantages(2604)
            } else {
                scrollToAdvantages(2604)
            }
        }} className={styles.link}>Преимущества</li>
        <li onClick={() => {
            if(isMobile) {
                scrollToThemes(3770)
            } else {
                scrollToThemes(3700)
            }
        }} className={styles.link}>Категории и темы</li>
        <li onClick={() => {
            if(isMobile) {
              scrollToContacts(4777)
            } else {
              scrollToContacts(4737)
            }
        }} className={styles.link}>Контакты</li>
      </ul>
      <div className={styles.pointerWrapper} onClick={() => window.scrollTo({behavior: "smooth", top: 0})}>
        <img className={styles.pointer} src={toTop} alt="" />
      </div>
    </div>
  );
});

export default NavigationLinks;
