import React from 'react';
import styles from "./reset-password-modal.module.scss";
import ModalWithTitle from 'shared/ui/modal-with-title/modal-with-title';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { authorizationSlice } from 'widgets/navigation/model/authorizationSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import MyButton from 'shared/ui/MyButton/MyButton';

interface ResetPasswordModalProps {
}

interface FormValues {
    new_password: string;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = () => {
    const dispatch = useAppDispatch();
    const {register, formState: {errors}, handleSubmit} = useForm<FormValues>();
    
    const {isResetPasswordModalVisible} = useTypedSelector(state => state.authorizationSlice);

    const {toggleResetPasswordModalVisibility} = authorizationSlice.actions;

    const onResetPassword: SubmitHandler<FormValues> = async (data) => {
        console.log(data);
        
    }

    return (
        <ModalWithTitle
            authSubtitle='Новый пароль'
            authTitle='Восстановление пароля'
            isModalVisible={isResetPasswordModalVisible}
            modalContentWrapper={styles.modalContentWrapper}
            closeAuthModal={() => dispatch(toggleResetPasswordModalVisibility(false))}
        >
            <form onSubmit={handleSubmit(onResetPassword)}>
                <MyInput 
                    type='password'
                    inputClassName={styles.resetPasswordInput}
                    register={register("new_password", {
                        required: "Это поле обязательное!"
                    })}
                />
                <MyButton
                    color='secondary'
                    variant='contained'
                    size='large'
                    btnClassName={styles.resetPasswordButton}
                >
                    Сохранить
                </MyButton>
            </form>
        </ModalWithTitle>
    )
}

export default ResetPasswordModal;