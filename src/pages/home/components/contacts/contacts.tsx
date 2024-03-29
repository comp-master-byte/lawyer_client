import React from "react";
import styles from "./contacts.module.scss";
import ContactCard from "./components/ContactCard/ContactCard";
import vk from "./assets/vk.svg?url";
import tg from "./assets/tg.svg?url";
import yura from "./assets/yura.svg?url";
import SectionTitle from "@/shared/styled-components/SectionTitle/SectionTitle";
import { TG_LINK, VK_LINK } from "@/shared/constants/constants";
import ContactForm from "@/features/contact-form/contact-form";

const Contacts: React.FC = React.memo(function Contacts() {
  return (
    <div className={styles.contactsWrapper}>
      <SectionTitle>Контакты</SectionTitle>
        <div className={styles.contactsContent}>
          <div className={styles.contentLeftColumn}>
            <div className={styles.leftColumnIcons}>
              <ContactCard
                variant="orange"
                text="Наша группа в ВК"
                href={VK_LINK}
                srcIcon={vk}
              />
              <ContactCard
                variant="blue"
                text="Наш канал в telegram"
                srcIcon={tg}
                href={TG_LINK}
              />
            </div>

            <div className={styles.contentInfo}>
                <div className={styles.contentInfoFirst}>
                  <h2 className={styles.contentTitle}>
                    По поводу работы плаформы пишите на
                  </h2>
                  <p className={styles.contentParagraph}>support@juraprav.ru</p>
                </div>
                <div className={styles.contentInfoSecond}>
                  <h2 className={styles.contentTitle}>
                    По поводу сотрудничества пишите на
                  </h2>
                  <p className={styles.contentParagraph}>partnership@juraprav.ru</p>
                </div>
            </div>
          </div>

          <div className={styles.contentRightColumn}>
            <img src={yura} className={styles.contentRightColumn__img} alt="" />
            <h2 className={styles.contentRightColumn__title}>
              Остались вопросы?
            </h2>
            <p className={styles.contentRightColumn__paragraph}>
              Свяжитесь с нами по указанным контактам или заполните форму и мы с
              вами свяжемся
            </p>

            <ContactForm />
          </div>
        </div>
    </div>
  );
});

export default Contacts;
