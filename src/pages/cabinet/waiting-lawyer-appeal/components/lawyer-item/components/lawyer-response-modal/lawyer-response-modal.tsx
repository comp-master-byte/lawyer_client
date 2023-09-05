import React from 'react';
import styles from "./lawyer-response-modal.module.scss";
import MyButton from 'shared/ui/MyButton/MyButton';
import InterestedLawyerModal from 'entities/insterested-lawyer-modal/insterested-lawyer-modal';

interface LawyerResponseModalProps {
    isLawyerResponseVisible: boolean;
    closeLawyerResponse: () => void;
}

const LawyerResponseModal: React.FC<LawyerResponseModalProps> = ({closeLawyerResponse, isLawyerResponseVisible}) => {
    return (
        <InterestedLawyerModal 
            closeModal={closeLawyerResponse}
            isModalVisible={isLawyerResponseVisible} 
        >
            <section className={styles.lawyerContent}>
                <h2 className={styles.lawyerTitle}>Иванов Иван Александрович пишет:</h2>
                <article className={styles.lawyerResponse}>
                    <p className={styles.paragraph}>Здравствуйте, Алексей!</p>
                    <br />
                    <p className={styles.paragraph}>
                        Основываясь на ваших вводных данных относительно развода, важно немедленно начать подготовительные шаги, такие как сбор всех финансовых и имущественных документов. Продолжайте вести конструктивный диалог с вашим супругом, и, если это возможно, рассмотрите вариант медиации для более гладкого разрешения споров. Не забудьте обратиться к адвокату, чтобы обеспечить вашу защиту и помочь вам в этом непростом процессе. Мы готовы предоставить вам консультацию и поддержку в вашем деле.
                    </p>
                    <br />
                    <p className={styles.paragraph}>
                        С уважением, Иванов Иван
                    </p>
                </article>
                <MyButton 
                    color='secondary'
                    variant='contained'
                    size='large'
                >
                    Выбрать юриста и ответить
                </MyButton>
            </section>
        </InterestedLawyerModal>
    )
}

export default LawyerResponseModal;