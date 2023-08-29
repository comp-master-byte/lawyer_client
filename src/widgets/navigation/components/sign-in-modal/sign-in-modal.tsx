import React from 'react';
import styles from "./sign-in-modal.module.scss";
import { SubmitHandler, useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from 'shared/constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';
import { SignInValues } from 'widgets/navigation/model/types';
import Auth from 'widgets/navigation/api/Auth';
import classNames from 'classnames';
import AuthorizationModalLayout from 'entities/authorization/authorization-modal-layout/authorization-modal-layout';

interface SignInModalProps {
    isSignInModalVisible: boolean;
    closeSignInModal: () => void;
    openSignUpModal: () => void;
    openForgetPasswordModal: () => void;
}

const SignInModal: React.FC<SignInModalProps> = (props) => {
    const {closeSignInModal, isSignInModalVisible, openSignUpModal, openForgetPasswordModal} = props;
    const {register, handleSubmit, formState: {errors}} = useForm<SignInValues>({mode: "all"});

    const onSignInFormSubmit: SubmitHandler<SignInValues> = async (data) => {
        const response = await Auth.login(data);
    }

    return (
        <AuthorizationModalLayout
            authTitle='Авторизация'
            authButtonText='Зарегистрироваться'
            authSubtitle='Еще не зарегистрированы?'
            closeAuthModal={closeSignInModal}
            isModalVisible={isSignInModalVisible}
            openAnotherModalCallback={openSignUpModal}
        >
            <form 
                autoComplete="off"
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
                    <div 
                        onClick={openForgetPasswordModal}
                        className={classNames(styles.inlineButton, styles.mobBtnInline)}
                    >
                        Напомнить пароль?
                    </div>
                </div>

            </form>
        </AuthorizationModalLayout>
    )
}

export default SignInModal