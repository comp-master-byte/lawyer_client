import React from "react";
import styles from "./SupportedBy.module.scss";
import logo from "./assets/logo.svg";
import fsi from "./assets/fsi.svg";

const SupportedBy: React.FC = React.memo(function SupportedBy() {
  return (
    <div className={styles.supportedByWrapper}>
      <img src={logo} className={styles.supportedByWrapper__logo} alt="" />
      <p>при поддержке</p>
      <img src={fsi} alt="" />
    </div>
  );
});

export default SupportedBy;
