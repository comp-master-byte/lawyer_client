import React from 'react';
import styles from "./free-question-item.module.scss";
import { MarketQuestion } from '../../model/types';
import MyButton from 'shared/ui/MyButton/MyButton';

interface ApplicationItemProps {
    application: MarketQuestion;
}

const FreeQuestionItem: React.FC<ApplicationItemProps> = ({application}) => {
    return (
        <div className={styles.applicationItemWrapper}>
            <div className={styles.applicationItem}>
                <div className={styles.applicationContent}>
                    <h4 className={styles.applicationContent__title}>Заявка {application.question_id}</h4>
                    <div className={styles.topicWrapper}>
                        <p className={styles.theme}>Тема:</p>
                        <p className={styles.topic}>{application.topic}</p>
                    </div>
                </div>
                <div className={styles.applicationWrapper}>
                    <MyButton
                        color='primary'
                        variant='contained'
                        size='small'
                        btnClassName={styles.applicationButton}
                    >
                        Посмотреть заявку
                    </MyButton>
                    <MyButton
                        color='secondary'
                        variant='contained'
                        size='small'
                        btnClassName={styles.applicationButton}
                    >
                        Написать отклик
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default FreeQuestionItem;