import React from "react";
import styles from "./Footer.module.scss";
import SupportedBy from "./components/SupportedBy/SupportedBy";
import NavigationLinks from "./components/NavigationLinks/NavigationLinks";
import ContactsAndLinks from "./components/ContactsAndLinks/ContactsAndLinks";

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
    </footer>
  );
});

export default Footer;
