import React from 'react';
import styles from "./empty-placeholder.module.scss";
import MyButton from 'shared/ui/MyButton/MyButton';
import personSvg from "./assets/person.png";

const EmptyPlaceholder: React.FC = () => {
    return (
        <div className={styles.emptyPlaceholderWrapper}>
            <h1 className={styles.emptyPlaceholderTitle}>
                Этот раздел сейчас в разработке, но будет запущен уже совсем скоро! 
            </h1>
            <p className={styles.emptyPlaceholderText}>
                По всем вопросам вы можете написать нам на почту <span>support@juraprav.ru</span>
            </p>
            <MyButton 
                color='primary' 
                variant='contained' 
                btnClassName={styles.emptyPlaceholderButton}
            >
                На главную
            </MyButton>
            <div className={styles.emptyPlaceholderSvg}>
                <img src={personSvg} alt="" />
            </div>
        </div>
    )
}

export default EmptyPlaceholder;