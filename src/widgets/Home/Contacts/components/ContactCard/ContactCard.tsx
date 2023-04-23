import React, { FC } from "react";
import styles from "./ContactCard.module.scss";
import classNames from "classnames";

interface ContactCardProps {
  variant: string;
  srcIcon: string;
  text: string;
}

const ContactCard: FC<ContactCardProps> = ({ variant, srcIcon, text }) => {
  return (
    <div
      className={classNames(styles.contactCardWrapper, {
        [styles.blue]: variant === "blue",
        [styles.orange]: variant === "orange",
      })}
    >
      <img src={srcIcon} alt="" />
      <p className={styles.contactCardParagraph}>{text}</p>
    </div>
  );
};

export default ContactCard;
