import React from 'react';
import styles from "./legal-advice.module.scss";
import Modal from '@/shared/ui/modal/modal';
import TopAdviceContent from './components/top-advice-content/top-advice-content';
import LegalForm from './components/legal-form/legal-form';

interface LegalAdviceProps {
    isModalVisible: boolean;
    closeLegalAdviceModal: () => void;
    backToSupportChatFromLegalModal: () => void;
}

const LegalAdvice: React.FC<LegalAdviceProps> = ({isModalVisible, closeLegalAdviceModal, backToSupportChatFromLegalModal}) => {
    return (
        <Modal 
            closeModal={closeLegalAdviceModal} 
            isModalVisible={isModalVisible} 
            modalContentClassName={styles.adviceContent}
        >
            <TopAdviceContent 
                closeLegalAdviceModal={closeLegalAdviceModal} 
                backToChatCallback={backToSupportChatFromLegalModal} 
            />
            <LegalForm />
        </Modal>
    )
}

export default LegalAdvice;