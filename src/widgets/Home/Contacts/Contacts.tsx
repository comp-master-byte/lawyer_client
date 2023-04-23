import React, { FC } from "react";
import styles from "./Contacts.module.scss";
import ContactCard from "./components/ContactCard/ContactCard";
import ContactForm from "../../../features/ContactForm/ContactForm";
import vk from "./assets/vk.svg";
import tg from "./assets/tg.svg";
import yura from "./assets/yura.svg";

const Contacts: FC = () => {
  return (
    <div className={styles.contactsWrapper}>
      <h1 className={styles.contactsWrapper__title}>Контакты</h1>
      <div className={styles.container}>
        <div className={styles.contactsContent}>
          <img src={yura} className={styles.contactsContent__img} alt="" />
          <div className={styles.contentLeftColumn}>
            <div className={styles.leftColumnIcons}>
              <ContactCard
                variant="orange"
                text="Наша группа в ВК"
                srcIcon={vk}
              />
              <ContactCard
                variant="blue"
                text="Наш канал в telegram"
                srcIcon={tg}
              />
            </div>

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

          <div className={styles.contentRightColumn}>
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
    </div>
  );
};

export default Contacts;
