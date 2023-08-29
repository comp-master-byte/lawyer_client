import React from 'react';
import styles from "./forget-password-modal.module.scss";
import AuthorizationModalLayout from 'entities/authorization/authorization-modal-layout/authorization-modal-layout';

interface ForgetPasswordModalProps {
    closeForgetPasswordModal: () => void;
    isForgetPasswordModalVisible: boolean;
}

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = ({closeForgetPasswordModal, isForgetPasswordModalVisible}) => {
    return (
        <AuthorizationModalLayout
            closeAuthModal={closeForgetPasswordModal}
            isModalVisible={isForgetPasswordModalVisible}
        >

        </AuthorizationModalLayout>
    )
}

export default ForgetPasswordModal;