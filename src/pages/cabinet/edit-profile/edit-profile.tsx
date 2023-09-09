import React, { useEffect, useState } from 'react';
import styles from "./edit-profile.module.scss";
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import MyButton from 'shared/ui/MyButton/MyButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from 'shared/constants/constants';
import { EditProfileValues } from './model/types';
import Edit from './api/Edit';
import StaticUserInformation from './components/static-user-information/static-user-information';
import EditPasswordModal from './components/edit-password-modal/edit-password-modal';
import classNames from 'classnames';
import { userSlice } from 'features/user/model/userSlice';

const EditProfile: React.FC = () => {
    const {register, formState: {errors, isDirty, isSubmitSuccessful}, handleSubmit, reset} = useForm<EditProfileValues>({mode: "all"});
    const dispatch = useAppDispatch();

    const {user} = useTypedSelector(state => state.userSlice);

    const [isEditPasswordModalVisible, setIsEditPasswordModalVisible] = useState(false);
    const [isProfileEdited, setIsProfileEdited] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const openEditPasswordModal = function() {
        setIsEditPasswordModalVisible(true);
    }

    const closeEditPasswordModal = function() {
        setIsEditPasswordModalVisible(false);
    }

    const onSubmitEditedForm: SubmitHandler<EditProfileValues> = async (data) => {
        setIsLoading(true);
        const updatedUser = await Edit.editProfile(data);
        if(updatedUser) {
            dispatch(userSlice.actions.setUser(updatedUser)) // Перезаписываем данные пользователя
            setIsProfileEdited(true);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if(user) {
            reset({email: user.email, full_name: user.full_name});
        }
    }, [user])

    return (
        <div className={styles.editProfileWrapper}>
            <StaticUserInformation />
            <EditPasswordModal 
                closeEditPasswordModal={closeEditPasswordModal}
                isEditPasswordModalVisible={isEditPasswordModalVisible}
            />

            <form onSubmit={handleSubmit(onSubmitEditedForm)} className={styles.editProfileForm}>
                <div className={styles.editFormInputs}>
                    <div className={styles.editInputWrapper}>
                        <div className={styles.inputName}>ФИО</div>
                        <MyInput 
                            error={errors.full_name}
                            inputClassName={styles.editInput}
                            register={register('full_name', {
                                required: "Это поле обязательное!"
                            })}
                        />
                    </div>
                    <div className={styles.editInputWrapper}>
                        <div className={styles.inputName}>Email</div>
                        <MyInput 
                            error={errors.email}
                            inputClassName={styles.editInput}
                            register={register('email', {
                                required: "Это поле обязательное!",
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: "Email введен некорректно!"
                                }
                            })}
                        />
                    </div>
                    <div className={styles.editInputWrapper}>
                        <div className={styles.inputName}>Пароль</div>
                        <MyButton 
                            type='button'
                            color='primary' 
                            variant='contained'
                            onClick={openEditPasswordModal}
                            btnClassName={styles.passwordButton}
                        >
                            Изменить   
                        </MyButton>
                    </div>
                </div>
                <div className={classNames(styles.submitButtonWrapper, {
                    [styles.visibility]: isDirty||isSubmitSuccessful
                })}>
                    <MyButton 
                        type='submit'
                        color='secondary' 
                        variant='contained'
                        disabled={isLoading}
                        btnClassName={styles.submitButton}
                    >
                        Сохранить
                    </MyButton>
                    {isProfileEdited && 
                        <p className={styles.submitSubTitle}>
                            Вам на почту {user?.email} пришло письмо со ссылкой, перейдите по ней, чтобы подтвердить почту
                        </p>
                    }
                </div>
                
            </form>
        </div>
    )
}

export default EditProfile;