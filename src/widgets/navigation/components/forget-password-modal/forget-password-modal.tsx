import React from 'react';
import styles from "./forget-password-modal.module.scss";
import AuthorizationModalLayout from 'entities/authorization/authorization-modal-layout/authorization-modal-layout';

interface ForgetPasswordModalProps {
    closeForgetPasswordModal: () => void;
    openSignInModal: () => void;
    isForgetPasswordModalVisible: boolean;
}

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = (props) => {
    const {closeForgetPasswordModal, isForgetPasswordModalVisible, openSignInModal} = props;
    return (
        <AuthorizationModalLayout
            authTitle='Восстановление пароля'
            authSubtitle='Уже зарегистрированы?'
            authButtonText='Войти'
            openAnotherModalCallback={openSignInModal}
            closeAuthModal={closeForgetPasswordModal}
            isModalVisible={isForgetPasswordModalVisible}
        >
            
        </AuthorizationModalLayout>
    )
}

export default ForgetPasswordModal;