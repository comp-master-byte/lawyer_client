import React from "react";
import styles from "./Footer.module.scss";
import SupportedBy from "./components/SupportedBy/SupportedBy";
import NavigationLinks from "./components/NavigationLinks/NavigationLinks";
import ContactsAndLinks from "./components/ContactsAndLinks/ContactsAndLinks";
import yura from "./assets/yura.svg";
import yuraMobileSvg from "./assets/footer-yura-mobile.svg";

const Footer: React.FC = React.memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <SupportedBy />
          <NavigationLinks />
          <ContactsAndLinks />
        </div>
      </div>
      <img src={yura} className={styles.footer__yura} alt="" />
      <img src={yuraMobileSvg} className={styles.yuraMobile} alt="" />
    </footer>
  );
});

export default Footer;
