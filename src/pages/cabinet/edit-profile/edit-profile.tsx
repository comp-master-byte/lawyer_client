import React, { useEffect, useState } from 'react';
import styles from "./edit-profile.module.scss";
import { useTypedSelector } from 'shared/lib/hooks/redux';
import MyButton from 'shared/ui/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from 'shared/constants/constants';
import classNames from 'classnames';

interface EditProfileValues {
    full_name: string;
    email: string;
    password?: string;
}

const EditProfile: React.FC = () => {
    const {register, formState: {errors}, handleSubmit, reset} = useForm<EditProfileValues>({mode: "all"});
    const navigate = useNavigate();

    const {user} = useTypedSelector(state => state.userSlice);

    const [isAllowToEditPassword, setIsAllowToEditPassword] = useState(false);

    const togglePasswordEdit = function() {
        setIsAllowToEditPassword(prev => !prev);
    }

    useEffect(() => {
        if(user) {
            reset(user);
        }
    }, [user])

    return (
        <div className={styles.editProfileWrapper}>
            <div className={styles.container}>
                <section className={styles.editProfileContent}>
                    <div className={styles.userFioInformation}>{user?.full_name}</div>
                    <MyButton 
                        color='primary' 
                        variant='contained'
                        onClick={() => navigate(-1)}
                        btnClassName={styles.goBackButton}
                    >
                        Назад   
                    </MyButton>
                </section>

                <form className={styles.editProfileForm}>
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
                                {isAllowToEditPassword && 
                                    <MyInput 
                                        placeholder='Введите пароль...'
                                        error={errors.password}
                                        inputClassName={styles.editInput}
                                        register={register('password')}
                                    />
                                }
                                <MyButton 
                                    type='button'
                                    color='primary' 
                                    variant='contained'
                                    onClick={togglePasswordEdit}
                                    btnClassName={classNames(styles.passwordButton, {
                                        [styles.editButtonMode]: isAllowToEditPassword
                                    })}
                                >
                                    Изменить   
                                </MyButton>
                        </div>
                    </div>

                    <div className={styles.submitButtonWrapper}>
                        <MyButton 
                            type='submit'
                            color='secondary' 
                            variant='contained'
                            btnClassName={styles.submitButton}
                        >
                            Сохранить
                        </MyButton>
                        <p className={styles.submitSubTitle}>
                            Вам на почту ivavan@gmail.com пришло письмо со ссылкой, перейдите по ней, чтобы подтвердить почту
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;