import React, { useEffect, useState } from 'react';
import styles from "./edit-password-modal.module.scss";
import MyInput from 'shared/ui/MyInput/MyInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from 'shared/ui/MyButton/MyButton';
import Edit from '../../../api/Edit';
import { PasswordsValues } from 'features/edit-profile/model/types';
import ModalWithTitle from 'shared/ui/modal-with-title/modal-with-title';

interface EditPasswordModalProps {
    isEditPasswordModalVisible: boolean;
    closeEditPasswordModal: () => void;
}

const EditPasswordModal: React.FC<EditPasswordModalProps> = ({closeEditPasswordModal, isEditPasswordModalVisible}) => {
    const {register, formState: {errors}, handleSubmit, setError, clearErrors, reset} = useForm<PasswordsValues>({mode: "all"});

    const [isLoading, setIsLoading] = useState(false);

    const onSubmitEditPasswordForm: SubmitHandler<PasswordsValues> = async (data) => {
        setIsLoading(true);
        const response = await Edit.setNewPassword(data, setError);
        setIsLoading(false);

        if(response) {
            closeEditPasswordModal();
        }
    }

    useEffect(() => {
        if(!isEditPasswordModalVisible) {
            clearErrors();
            reset({current_password: '', new_password: ''});
        }
    }, [isEditPasswordModalVisible])

    return (
        <ModalWithTitle 
            authTitle='Изменение пароля'
            isModalVisible={isEditPasswordModalVisible} 
            closeAuthModal={closeEditPasswordModal}
        >
            <form>
                <div className={styles.passwordInputsWrapper}>
                    <div className={styles.passwordInput}>
                        <div className={styles.passwordLabel}>Старый пароль</div>
                        <MyInput 
                            type='password'
                            error={errors.current_password}
                            register={register("current_password", {
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
                    type='button'
                    color='secondary'
                    variant='contained'
                    disabled={isLoading}
                    btnClassName={styles.submitFormButton}
                    onClick={handleSubmit(onSubmitEditPasswordForm)}
                >
                    Сохранить
                </MyButton>
            </form>
        </ModalWithTitle>
    )
}

export default EditPasswordModal;