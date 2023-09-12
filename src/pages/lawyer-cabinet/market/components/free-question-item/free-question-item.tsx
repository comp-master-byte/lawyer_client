import React, { useState } from 'react';
import styles from "./free-question-item.module.scss";
import { MarketQuestion } from '../../model/types';
import MyButton from 'shared/ui/MyButton/MyButton';
import ClientQuestionModal from 'entities/market/client-question-modal/client-question-modal';

interface ApplicationItemProps {
    application: MarketQuestion;
}

const FreeQuestionItem: React.FC<ApplicationItemProps> = ({application}) => {
    const [isClientQuestionModalVisible, setIsClientModalVisible] = useState(false);

    const openClientQuestionModal = () => setIsClientModalVisible(true);
    const closeClientQuestionModal = () => setIsClientModalVisible(false);

    return (
        <div className={styles.applicationItemWrapper}>
            <ClientQuestionModal
                question={application} 
                closeAuthModal={closeClientQuestionModal}
                isModalVisible={isClientQuestionModalVisible}
            />

            <div className={styles.applicationItem}>
                <div className={styles.applicationContent}>
                    <h4 className={styles.applicationContent__title}>Заявка {application.question_id}</h4>
                    <div className={styles.topicWrapper}>
                        <p className={styles.theme}>Тема:</p>
                        <p className={styles.topic}>{application.topic}</p>
                    </div>
                </div>
                <div className={styles.applicationButtonWrapper}>
                    <MyButton
                        color='primary'
                        variant='contained'
                        size='small'
                        btnClassName={styles.applicationButton}
                        onClick={openClientQuestionModal}
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