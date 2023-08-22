import React from 'react';
import styles from "./legal-advice.module.scss";
import Modal from 'shared/ui/modal/modal';

interface LegalAdviceProps {
    isModalVisible: boolean;
}

const LegalAdvice: React.FC<LegalAdviceProps> = ({isModalVisible}) => {
    return (
        <Modal isModalVisible={isModalVisible} >legal-advice</Modal>
    )
}

export default LegalAdvice;