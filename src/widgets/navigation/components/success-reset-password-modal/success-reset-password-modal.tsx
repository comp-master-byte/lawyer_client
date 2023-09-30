import React from 'react';
import styles from "./success-reset-password-modal.module.scss";
import ModalCloseButton from 'entities/layouts/modal-close-button/modal-close-button';

interface SuccessResetPasswordModalProps {
    closeModal: () => void;
    isModalVisible: boolean;
}

const SuccessResetPasswordModal: React.FC<SuccessResetPasswordModalProps> = ({closeModal, isModalVisible}) => {
    return (
        <ModalCloseButton
            closeModal={closeModal}
            isModalVisible={isModalVisible}
        >
            text
        </ModalCloseButton>
    )
}

export default SuccessResetPasswordModal;