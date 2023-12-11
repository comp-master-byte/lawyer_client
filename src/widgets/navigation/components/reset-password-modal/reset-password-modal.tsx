import React, { useState } from 'react';
import styles from "./reset-password-modal.module.scss";
import ModalWithTitle from '@/shared/ui/modal-with-title/modal-with-title';
import { useAppDispatch, useTypedSelector } from '@/shared/lib/hooks/redux';
import { authorizationSlice } from '@/widgets/navigation/model/authorizationSlice';
import ResetForm from './components/reset-form/reset-form';
import SuccessReset from './components/success-reset/success-reset';

const ResetPasswordModal: React.FC = () => {
    const dispatch = useAppDispatch();
    
    const {isResetPasswordModalVisible} = useTypedSelector(state => state.authorizationSlice);

    const {toggleResetPasswordModalVisibility} = authorizationSlice.actions;

    const [isSuccessResetPassword, setIsSuccessResetPassword] = useState(false);

    const closeResetPasswordModal = () => {
        setIsSuccessResetPassword(false);
        dispatch(toggleResetPasswordModalVisibility(false));
    }

    return (
        <ModalWithTitle
            authSubtitle={!isSuccessResetPassword ? 'Новый пароль' : ''}
            authTitle={!isSuccessResetPassword ? 'Восстановление пароля' : ''}
            closeAuthModal={closeResetPasswordModal}
            isModalVisible={isResetPasswordModalVisible}
            modalContentWrapper={!isSuccessResetPassword ? styles.modalContentWrapper : styles.hideContent}
            modalWrapperContent={isSuccessResetPassword ? styles.wrapper : ''}
        >
            {!isSuccessResetPassword 
                ? <ResetForm setIsSuccessResetPassword={setIsSuccessResetPassword} />
                : <SuccessReset closeModal={closeResetPasswordModal}></SuccessReset>
            }
        </ModalWithTitle>
    )
}

export default ResetPasswordModal;