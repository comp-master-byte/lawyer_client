import React from 'react';
import styles from "./forget-password-modal.module.scss";
import ModalWithTitle from 'shared/ui/modal-with-title/modal-with-title';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import { ForgetPassword } from 'widgets/navigation/model/types';
import { EMAIL_REGEX } from 'shared/constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';
import Auth from 'widgets/navigation/api/Auth';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { authorizationSlice } from 'widgets/navigation/model/authorizationSlice';

interface ForgetPasswordModalProps {
    closeForgetPasswordModal: () => void;
    openSignInModal: () => void;
    isForgetPasswordModalVisible: boolean;
}

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = (props) => {
    const {closeForgetPasswordModal, isForgetPasswordModalVisible, openSignInModal} = props;
    const {register, handleSubmit, formState: {errors}} = useForm<ForgetPassword>();

    const onSubmitEmail: SubmitHandler<ForgetPassword> = async (data) => {
        const response = await Auth.resetPassword(data);
        if(response) {
            closeForgetPasswordModal();
        }
    }

    return (
        <ModalWithTitle
            authTitle='Восстановление пароля'
            authSubtitle='Уже зарегистрированы?'
            authButtonText='Войти'
            openAnotherModalCallback={openSignInModal}
            closeAuthModal={closeForgetPasswordModal}
            isModalVisible={isForgetPasswordModalVisible}
        >
            <form onSubmit={handleSubmit(onSubmitEmail)} className={styles.submitForm}>
                <MyInput 
                    placeholder='Email'
                    error={errors.email}
                    register={register("email", {
                        required: "Это поле обязательное!",
                        pattern: {
                            message: "Email введен некорректно!",
                            value: EMAIL_REGEX
                        }
                    })}
                />
                <MyButton 
                    color='secondary' 
                    variant='contained'
                    btnClassName={styles.submitButton}
                >
                    Отправить
                </MyButton>
            </form>

            
        </ModalWithTitle>
    )
}

export default ForgetPasswordModal;