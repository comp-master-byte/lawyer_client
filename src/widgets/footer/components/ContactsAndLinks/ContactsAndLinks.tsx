import React from "react";
import styles from "./ContactsAndLinks.module.scss";
import vk from "./assets/vk.svg";
import tg from "./assets/tg.svg";

const ContactsAndLinks: React.FC = React.memo(function ContactsAndLinks() {
  return (
    <div className={styles.contactsAndLinksWrapper}>
      <div className={styles.linksAndEmails}>
        <div className={styles.linksImages}>
          <a href="https://vk.com/jura_prav" target="_blank">
            <img className={styles.socials} src={vk} alt="" />
          </a>
          <a href="https://t.me/jura_prav" target="_blank">
            <img className={styles.socials} src={tg} alt="" />
          </a>
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
