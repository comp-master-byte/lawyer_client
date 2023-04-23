import React, { FC } from "react";
import styles from "./ContactsAndLinks.module.scss";
import vk from "./assets/vk.svg";
import tg from "./assets/tg.svg";

const ContactsAndLinks: FC = React.memo(function ContactsAndLinks() {
  return (
    <div className={styles.contactsAndLinksWrapper}>
      <div className={styles.linksAndEmails}>
        <div className={styles.linksImages}>
          <img src={vk} alt="" />
          <img src={tg} alt="" />
        </div>
        <div className={styles.emailsText}>
          <p>support@juraprav.ru</p>
          <p>partnership@juraprav.ru</p>
        </div>
      </div>

      <div className={styles.userRigths}>
        <p>2023</p>
        <div className={styles.emailsText}>
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
        </div>
      </div>
    </div>
  );
});

export default ContactsAndLinks;
