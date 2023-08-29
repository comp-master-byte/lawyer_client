import React from 'react';
import styles from "./forget-password-modal.module.scss";
import AuthorizationModalLayout from 'entities/authorization/authorization-modal-layout/authorization-modal-layout';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import { ForgetPassword } from 'widgets/navigation/model/types';
import { EMAIL_REGEX } from 'shared/constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';

interface ForgetPasswordModalProps {
    closeForgetPasswordModal: () => void;
    openSignInModal: () => void;
    isForgetPasswordModalVisible: boolean;
}

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = (props) => {
    const {closeForgetPasswordModal, isForgetPasswordModalVisible, openSignInModal} = props;
    const {register, handleSubmit, formState: {errors}} = useForm<ForgetPassword>();

    const onSubmitEmail: SubmitHandler<ForgetPassword> = async (data) => {

    }

    return (
        <AuthorizationModalLayout
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

            
        </AuthorizationModalLayout>
    )
}

export default ForgetPasswordModal;