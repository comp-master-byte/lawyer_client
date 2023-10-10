import React, { useCallback, useState } from 'react';
import styles from "./free-question-item.module.scss";
import { MarketQuestion } from '../../model/types';
import MyButton from 'shared/ui/MyButton/MyButton';
import ClientQuestionModal from 'entities/market/client-question-modal/client-question-modal';
import ResponseModal from 'entities/market/response-modal/response-modal';

interface ApplicationItemProps {
    application: MarketQuestion;
}

const FreeQuestionItem: React.FC<ApplicationItemProps> = ({application}) => {
    const [isClientQuestionModalVisible, setIsClientModalVisible] = useState(false);
    const [isResponseModalVisible, setIsResponseModalVisible] = useState(false);
    const [isChainQuestionsModalVisible, setIsChainQuestionsModalVisible] = useState(false);

    const openClientQuestionModal = () => setIsClientModalVisible(true);
    const closeClientQuestionModal = () => setIsClientModalVisible(false);

    const closeResponseModal = () => setIsResponseModalVisible(false);
    const openResponseModal = () => setIsResponseModalVisible(true);

    const openChainQuestionsModal = useCallback(() => {
        setIsClientModalVisible(false);
        setIsChainQuestionsModalVisible(true);
    }, []);

    return (
        <div className={styles.applicationItemWrapper}>
            <ClientQuestionModal
                question={application} 
                closeQuestionModal={closeClientQuestionModal}
                isModalVisible={isClientQuestionModalVisible}
                openResponseModal={openResponseModal}
                openChainQuestionsModal={openChainQuestionsModal}
            />

            <ResponseModal 
                closeModal={closeResponseModal}
                isModalVisible={isResponseModalVisible}
                questionId={application.question_id}
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
                        onClick={openResponseModal}
                    >
                        Написать отклик
                    </MyButton>
                </div>
            </div>
        </div>

    )
}

export default FreeQuestionItem;