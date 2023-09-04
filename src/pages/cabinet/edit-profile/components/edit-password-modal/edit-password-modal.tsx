import React from 'react';
import styles from "./edit-password-modal.module.scss";
import AuthorizationModalLayout from 'entities/authorization/authorization-modal-layout/authorization-modal-layout';
import MyInput from 'shared/ui/MyInput/MyInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from 'shared/ui/MyButton/MyButton';
import Edit from '../../api/Edit';

interface PasswordsValues {
    password: string;
    new_password: string;
}

interface EditPasswordModalProps {
    isEditPasswordModalVisible: boolean;
    closeEditPasswordModal: () => void;
}

const EditPasswordModal: React.FC<EditPasswordModalProps> = ({closeEditPasswordModal, isEditPasswordModalVisible}) => {
    const {register, formState: {errors}, handleSubmit} = useForm<PasswordsValues>({mode: "all"});

    const onSubmitEditPasswordForm: SubmitHandler<PasswordsValues> = async (data) => {
        const response = Edit.editProfile(data);
    }

    return (
        <AuthorizationModalLayout 
            authTitle='Изменение пароля'
            isModalVisible={isEditPasswordModalVisible} 
            closeAuthModal={closeEditPasswordModal}

        >
            <form onSubmit={handleSubmit(onSubmitEditPasswordForm)}>
                <div className={styles.passwordInputsWrapper}>
                    <div className={styles.passwordInput}>
                        <div className={styles.passwordLabel}>Старый пароль</div>
                        <MyInput 
                            type='password'
                            error={errors.password}
                            register={register("password", {
                                required: "Это поле обязательное"
                            })}
                        />
                    </div>

                    <div className={styles.passwordInput}>
                        <div className={styles.passwordLabel}>Новый пароль</div>
                        <MyInput 
                            type='password'
                            error={errors.new_password}
                            register={register("new_password", {
                                required: "Это поле обязательное"
                            })}
                        />
                    </div>
                </div>
                
                <MyButton
                    type='submit'
                    color='secondary'
                    variant='contained'
                    btnClassName={styles.submitFormButton}
                >
                    Сохранить
                </MyButton>
            </form>
        </AuthorizationModalLayout>
    )
}

export default EditPasswordModal;