import React, { useCallback } from 'react';
import styles from "./client-question-modal.module.scss";
import { MarketQuestion } from 'pages/lawyer-cabinet/market/model/types';
import ModalWithTitle from 'shared/ui/modal-with-title/modal-with-title';
import MyButton from 'shared/ui/MyButton/MyButton';
import { createdBy } from './lib/helpers/createdBy';

interface ClientQuestionModalProps {
    closeQuestionModal: () => void;
    openResponseModal: () => void;
    isModalVisible: boolean;
    question: MarketQuestion;
    openChainQuestionsModal: () => void;
}

const ClientQuestionModal: React.FC<ClientQuestionModalProps> = (props) => {
    const {
        closeQuestionModal, 
        isModalVisible, 
        question, 
        openResponseModal,
        openChainQuestionsModal
    } = props;

    const writeLawyerResponse = useCallback(() => {
        closeQuestionModal();
        openResponseModal();
    }, [])

    return (
        <ModalWithTitle
            authTitle={`Заявка ${question.question_id}`}
            closeAuthModal={closeQuestionModal}
            isModalVisible={isModalVisible}
        >
            <article className={styles.clientData}>
                <div className={styles.infoBlock}>
                    <p className={styles.paragraph}>Тема:</p>
                    <p className={styles.paragraph}>{question.topic}</p>
                </div>
                <div className={styles.infoBlock}>
                    <p className={styles.paragraph}>Клиент:</p>
                    <p className={styles.paragraph}>{createdBy(question.created_by.full_name)}</p>
                </div>
            </article>

            <article className={styles.questionWrapper}>
                {question.question_text}
            </article>

            <article className={styles.questionButtons}>
                <MyButton
                    color='primary'
                    variant='contained'
                    size='large'
                    onClick={openChainQuestionsModal}
                >
                    Посмотреть переписку с ботом
                </MyButton>
                <MyButton
                    color='secondary'
                    variant='contained'
                    size='large'
                    onClick={writeLawyerResponse}
                >
                    Написать отклик
                </MyButton>
            </article>

        </ModalWithTitle>
    )
}

export default ClientQuestionModal;