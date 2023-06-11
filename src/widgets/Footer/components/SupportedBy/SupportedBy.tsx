import React from "react";
import styles from "./SupportedBy.module.scss";
import logo from "./assets/logo.svg";
import fsi from "./assets/fsi.svg";
import smallLogoSvg from "../../assets/footer-logo.svg";

const SupportedBy: React.FC = React.memo(function SupportedBy() {
  return (
    <div className={styles.supportedByWrapper}>
      <img src={logo} className={styles.supportedByWrapper__logo} alt="" />
      <img src={smallLogoSvg} className={styles.mobileLogo} alt="" />
      <p>при поддержке</p>
      <img src={fsi} className={styles.fsi} alt="" />
    </div>
  );
});
export default SupportedBy;
