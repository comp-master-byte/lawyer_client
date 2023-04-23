import React, { FC } from "react";
import styles from "./Footer.module.scss";
import SupportedBy from "./components/SupportedBy/SupportedBy";

const Footer: FC = React.memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <SupportedBy />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
