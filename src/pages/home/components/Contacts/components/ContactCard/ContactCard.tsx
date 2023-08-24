import React from "react";
import styles from "./ContactCard.module.scss";
import classNames from "classnames";

interface ContactCardProps {
  variant: string;
  srcIcon: string;
  text: string;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = React.memo(
  function ContactCard({ variant, srcIcon, text, href }) {
    return (
      <a
        target="_blank"
        href={href}
        className={classNames(styles.contactCardWrapper, {
          [styles.blue]: variant === "blue",
          [styles.orange]: variant === "orange",
        })}
      >
        <img src={srcIcon} alt="" />
        <p className={styles.contactCardParagraph}>{text}</p>
      </a>
    );
  }
);

export default ContactCard;
