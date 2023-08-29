import React from 'react';
import styles from "./SignInModal.module.scss";
import Modal from 'shared/ui/modal/modal';
import closeModalSvg from "../../assets/close-modal.svg";
import { SubmitHandler, useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from 'shared/constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';
import { SignInValues } from 'widgets/navigation/model/types';
import Auth from 'widgets/navigation/api/Auth';

interface SignInModalProps {
    isSignInModalVisible: boolean;
    closeSignInModal: () => void;
    openSignUpModal: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({closeSignInModal, isSignInModalVisible, openSignUpModal}) => {
    const {register, handleSubmit, formState: {errors}} = useForm<SignInValues>({mode: "all"});

    const onSignInFormSubmit: SubmitHandler<SignInValues> = async (data) => {
        const response = await Auth.login(data);
    }

    return (
        <Modal modalContentClassName={styles.authModalContent} isModalVisible={isSignInModalVisible}>
            <div className={styles.closeAuthModalButton} onClick={closeSignInModal}>
                <img src={closeModalSvg} alt="" />
            </div>
            <article className={styles.signInModalTitle}>
                <h2 className={styles.signInModalTitle__title}>Авторизация</h2>
                <p className={styles.signInModalTitle__text}>Еще не зарегистрированы?</p>
                <div className={styles.inlineButton} onClick={openSignUpModal}>Зарегистрироваться</div>
            </article>
            <form 
                className={styles.signInFormWrapper}
                onSubmit={handleSubmit(onSignInFormSubmit)}
            >
                <div className={styles.formInputs}>
                    <MyInput 
                        label=''
                        placeholder='Email'
                        error={errors.email}
                        register={register("email", {
                            required: "Это поле обязательное!",
                            pattern: {
                                value: EMAIL_REGEX,
                                message: "Email введен некорректно!"
                            }
                        })}
                    />
                    <MyInput 
                        label=''
                        type="password"
                        placeholder='Пароль'
                        error={errors.password}
                        register={register("password", {
                            required: "Это поле обязательное!",
                        })}
                    />
                </div>

                <div className={styles.signInButtons}>
                    <MyButton 
                        color='secondary' 
                        variant='contained' 
                        btnClassName={styles.submitButton}
                    >   
                        Войти
                    </MyButton>
                    <div className={styles.inlineButton}>Напомнить пароль?</div>
                </div>

            </form>
        </Modal>
    )
}

export default SignInModal