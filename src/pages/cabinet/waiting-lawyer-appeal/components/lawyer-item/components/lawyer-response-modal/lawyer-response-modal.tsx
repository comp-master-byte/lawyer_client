import React from 'react';
import styles from "./lawyer-response-modal.module.scss";
import MyButton from '@/shared/ui/MyButton/MyButton';
import ModalCloseButton from '@/entities/layouts/modal-close-button/modal-close-button';
import { InterestedLawyer } from '@/pages/cabinet/waiting-lawyer-appeal/model/types';

interface LawyerResponseModalProps {
    isLawyerResponseVisible: boolean;
    closeLawyerResponse: () => void;
    openConfirmationModal: () => void;
    interestedLawyer: InterestedLawyer;
}

const LawyerResponseModal: React.FC<LawyerResponseModalProps> = ({closeLawyerResponse, isLawyerResponseVisible, openConfirmationModal, interestedLawyer}) => {
    return (
        <ModalCloseButton
            closeModal={closeLawyerResponse}
            isModalVisible={isLawyerResponseVisible} 
        >
            <section className={styles.lawyerContent}>
                <h2 className={styles.lawyerTitle}>{interestedLawyer.lawyer.full_name} пишет:</h2>
                <article className={styles.lawyerResponse}>
                    <p className={styles.paragraph}>
                        {interestedLawyer.note}
                    </p>
                </article>
                <MyButton 
                    color='secondary'
                    variant='contained'
                    size='large'
                    onClick={openConfirmationModal}
                >
                    Выбрать юриста и ответить
                </MyButton>
            </section>
        </ModalCloseButton>
    )
}

export default LawyerResponseModal;