import React from "react";
import styles from "./ContactsAndLinks.module.scss";
import vk from "./assets/vk.svg";
import tg from "./assets/tg.svg";

const ContactsAndLinks: React.FC = React.memo(function ContactsAndLinks() {
  return (
    <div className={styles.contactsAndLinksWrapper}>
      <div className={styles.linksAndEmails}>
        <div className={styles.linksImages}>
          <img src={vk} alt="" />
          <img src={tg} alt="" />
        </div>
        <div className={styles.emailsText}>
          <p className={styles.emailsText__paragraph}>support@juraprav.ru</p>
          <p className={styles.emailsText__paragraph}>
            partnership@juraprav.ru
          </p>
        </div>
      </div>

      <div className={styles.userRigths}>
        <p className={styles.userRigths__year}>2023</p>
        <div className={styles.emailsText}>
          <p className={styles.userRigths__paragraph}>
            Политика конфиденциальности
          </p>
          <p className={styles.userRigths__paragraph}>
            Пользовательское соглашение
          </p>
        </div>
      </div>
    </div>
  );
});

export default ContactsAndLinks;
