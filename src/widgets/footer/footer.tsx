import React from "react";
import styles from "./footer.module.scss";
import SupportedBy from "./components/SupportedBy/SupportedBy";
import NavigationLinks from "./components/NavigationLinks/NavigationLinks";
import ContactsAndLinks from "./components/ContactsAndLinks/ContactsAndLinks";

const Footer: React.FC = React.memo(function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.FooterContent}>
          <SupportedBy />
          <NavigationLinks />
          <ContactsAndLinks />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
