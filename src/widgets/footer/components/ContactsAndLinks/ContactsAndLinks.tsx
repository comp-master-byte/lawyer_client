import React from "react";
import styles from "./ContactsAndLinks.module.scss";
import vk from "./assets/vk.svg";
import tg from "./assets/tg.svg";
import { TG_LINK, VK_LINK } from "shared/constants/constants";
import { Link } from "react-router-dom";

const ContactsAndLinks: React.FC = React.memo(function ContactsAndLinks() {
  return (
    <div className={styles.contactsAndLinksWrapper}>
      <div className={styles.linksAndEmails}>
        <div className={styles.linksImages}>
          <a href={VK_LINK} target="_blank">
            <img className={styles.socials} src={vk} alt="" />
          </a>
          <a href={TG_LINK} target="_blank">
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
          <Link to='/privacy-policy' className={styles.userRigths__paragraph}>
                Политика конфиденциальности
          </Link>
          <Link to='/terms-of-use' className={styles.userRigths__paragraph}>
            Пользовательское соглашение
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ContactsAndLinks;
