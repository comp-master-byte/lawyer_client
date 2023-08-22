import React from 'react';
import styles from "./legal-advice.module.scss";
import Modal from 'shared/ui/modal/modal';
import TopAdviceContent from './components/top-advice-content/top-advice-content';


interface LegalAdviceProps {
    isModalVisible: boolean;
    closeLegalAdviceModal: () => void;
}

const LegalAdvice: React.FC<LegalAdviceProps> = ({isModalVisible, closeLegalAdviceModal}) => {
    return (
        <Modal isModalVisible={isModalVisible} modalContentClassName={styles.adviceContent}>
            <TopAdviceContent closeLegalAdviceModal={closeLegalAdviceModal} />
        </Modal>
    )
}

export default LegalAdvice;